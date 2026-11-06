
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const INITIAL_NOTE = {
  title: "",
  content: "",
};

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("anime-notes-theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "anime-notes-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Load notes from MongoDB through your API
  const loadNotes = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/notes");

      if (!response.ok) {
        throw new Error("Could not load notes.");
      }

      const data = await response.json();
      const loadedNotes = Array.isArray(data)
        ? data
        : data.notes || [];

      setNotes(loadedNotes);

      setSelectedId((currentId) => {
        if (
          currentId &&
          loadedNotes.some(
            (note) => String(note._id) === String(currentId)
          )
        ) {
          return currentId;
        }

        return loadedNotes.length
          ? String(loadedNotes[0]._id)
          : null;
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const selectedNote = notes.find(
    (note) => String(note._id) === String(selectedId)
  );

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return notes;

    return notes.filter((note) => {
      const noteTitle = (note.title || "").toLowerCase();
      const noteContent = (note.content || "").toLowerCase();

      return (
        noteTitle.includes(query) ||
        noteContent.includes(query)
      );
    });
  }, [notes, search]);

  function selectNote(note) {
    setSelectedId(String(note._id));
    setTitle(note.title || "");
    setContent(note.content || "");
    setError("");
    setNotice("");
  }

  function createNewNote() {
    setSelectedId(null);
    setTitle("");
    setContent("");
    setError("");
    setNotice("");
  }

  async function handleSave(event) {
    event.preventDefault();

    if (!title.trim() && !content.trim()) {
      setError("Write a title or some content first.");
      return;
    }

    setSaving(true);
    setError("");
    setNotice("");

    try {
      const isEditing = Boolean(selectedId);

      const response = await fetch(
        isEditing
          ? `/api/notes/${selectedId}`
          : "/api/notes",
        {
          method: isEditing ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title.trim() || "Untitled Note",
            content,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Could not save note.");
      }

      const savedNote = result.note || result;

      if (!savedNote._id) {
        await loadNotes();
        setNotice("Note saved!");
        return;
      }

      setNotes((previousNotes) => {
        if (isEditing) {
          return previousNotes.map((note) =>
            String(note._id) === String(savedNote._id)
              ? savedNote
              : note
          );
        }

        return [savedNote, ...previousNotes];
      });

      setSelectedId(String(savedNote._id));
      setTitle(savedNote.title || "");
      setContent(savedNote.content || "");
      setNotice(isEditing ? "Changes saved!" : "Note created!");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!selectedId) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `/api/notes/${selectedId}`,
        { method: "DELETE" }
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Could not delete note.");
      }

      const remainingNotes = notes.filter(
        (note) => String(note._id) !== String(selectedId)
      );

      setNotes(remainingNotes);

      if (remainingNotes.length > 0) {
        selectNote(remainingNotes[0]);
      } else {
        createNewNote();
      }

      setNotice("Note deleted.");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  }

  const page = darkMode
    ? "bg-[#171827] text-[#f4f0ff]"
    : "bg-[#fffaf5] text-[#302b45]";

  const panel = darkMode
    ? "bg-[#222438] border-[#363951]"
    : "bg-white border-[#f0e8e5]";

  const muted = darkMode ? "text-[#aaaac3]" : "text-[#9992a5]";

  const field = darkMode
    ? "bg-[#191c2e] border-[#41445e] text-white placeholder:text-[#777990]"
    : "bg-[#fffaf8] border-[#eee5e4] text-[#302b45] placeholder:text-[#b4acb5]";

  function formatDate(date) {
    if (!date) return "Recently";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return "Recently";

    return parsed.toLocaleDateString("en", {
      month: "short",
      day: "numeric",
    });
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${page}`}>
      <div className="mx-auto max-w-[1500px] p-4 md:p-7">
        {/* Top bar */}
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-pink-400 text-2xl shadow-lg shadow-violet-500/20">
              🌸
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                Note<span className="text-violet-500">Sakura</span>
              </h1>
              <p className={`text-xs ${muted}`}>
                Your little corner of the universe
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`hidden text-sm sm:inline ${muted}`}
            >
              {notes.length} notes in your world
            </span>

            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition hover:scale-105 ${panel}`}
              aria-label="Toggle light and dark mode"
            >
              {darkMode ? "☀️ Day Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </header>

        {/* Anime-inspired banner */}
        <section className="relative mb-7 overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-600 via-purple-500 to-pink-400 p-6 text-white shadow-xl shadow-purple-500/10 md:p-9">
          <div className="pointer-events-none absolute -right-5 -top-10 text-[140px] opacity-20 md:right-16 md:text-[180px]">
            🌸
          </div>

          <div className="pointer-events-none absolute bottom-0 right-36 text-6xl opacity-30">
            ☁️
          </div>

          <div className="relative z-10 max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-purple-100">
              ✨ Your creative sanctuary
            </p>

            <h2 className="mb-3 text-3xl font-black leading-tight md:text-4xl">
              Every thought
              <br />
              deserves a little magic.
            </h2>

            <p className="max-w-md text-sm leading-6 text-purple-50 md:text-base">
              Capture your ideas, save your dreams, and make
              every day a new chapter in your story.
            </p>

            <button
              type="button"
              onClick={createNewNote}
              className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-bold text-violet-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              ＋ Write a new note
            </button>
          </div>
        </section>

        {/* Main workspace */}
        <div className="grid items-start gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside
            className={`rounded-[24px] border p-5 ${panel}`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-extrabold">My notebook</h2>

              <button
                type="button"
                onClick={createNewNote}
                title="Create note"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-xl text-white transition hover:bg-violet-600"
              >
                +
              </button>
            </div>

            <label className="mb-5 block">
              <span className="sr-only">Search notes</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="⌕  Search your thoughts..."
                className={`w-full rounded-xl border px-3 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 ${field}`}
              />
            </label>

            <div className="mb-3 flex items-center justify-between">
              <span
                className={`text-xs font-bold uppercase tracking-widest ${muted}`}
              >
                Your notes
              </span>

              <span className={`text-xs ${muted}`}>
                {filteredNotes.length}
              </span>
            </div>

            <div className="max-h-[540px] space-y-2 overflow-y-auto pr-1">
              {loading ? (
                <p className={`py-8 text-center text-sm ${muted}`}>
                  ✨ Finding your notes...
                </p>
              ) : filteredNotes.length === 0 ? (
                <div className="py-8 text-center">
                  <div className="mb-3 text-4xl">
                    {search ? "🔎" : "📔"}
                  </div>
                  <p className="text-sm font-semibold">
                    {search ? "No matches found" : "A fresh beginning"}
                  </p>
                  <p className={`mt-1 text-xs ${muted}`}>
                    {search
                      ? "Try another search."
                      : "Create your first note!"}
                  </p>
                </div>
              ) : (
                filteredNotes.map((note, index) => {
                  const active =
                    String(note._id) === String(selectedId);

                  const decorations = ["🌸", "🌙", "⭐", "🍡", "🦋"];

                  return (
                    <button
                      key={note._id}
                      type="button"
                      onClick={() => selectNote(note)}
                      className={`w-full rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${
                        active
                          ? "border-violet-400 bg-violet-500/10 shadow-sm"
                          : darkMode
                          ? "border-transparent hover:bg-white/5"
                          : "border-transparent hover:bg-[#fff4f7]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-violet-100 text-xl">
                          {decorations[index % decorations.length]}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold">
                            {note.title || "Untitled Note"}
                          </p>

                          <p className={`mt-1 line-clamp-2 text-xs leading-5 ${muted}`}>
                            {note.content || "An empty little page..."}
                          </p>

                          <p className={`mt-2 text-[10px] ${muted}`}>
                            {formatDate(
                              note.updatedAt || note.createdAt
                            )}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            <div
              className={`mt-5 rounded-2xl p-4 ${
                darkMode ? "bg-[#191c2e]" : "bg-[#fff4f8]"
              }`}
            >
              <p className="mb-1 text-sm font-bold">🌷 Little reminder</p>
              <p className={`text-xs leading-5 ${muted}`}>
                Small thoughts can grow into beautiful things.
                Keep writing!
              </p>
            </div>
          </aside>

          {/* Editor */}
          <section
            className={`min-h-[600px] rounded-[24px] border p-5 md:p-8 ${panel}`}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p
                  className={`mb-1 text-xs font-bold uppercase tracking-[0.2em] ${muted}`}
                >
                  Your creative space
                </p>
                <h2 className="text-xl font-extrabold">
                  {selectedId ? "Edit your story" : "A brand-new page"}
                </h2>
              </div>

              {selectedId && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-500/10"
                >
                  🗑 Delete
                </button>
              )}
            </div>

            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-500"
              >
                {error}
              </div>
            )}

            {notice && (
              <div
                role="status"
                className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-500"
              >
                {notice}
              </div>
            )}

            <form onSubmit={handleSave}>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-pink-500/10 px-3 py-1.5 text-xs font-semibold text-pink-500">
                  🌸 Personal
                </span>
                <span className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-500">
                  ✨ My thoughts
                </span>
              </div>

              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-violet-500">
                Note title
              </label>

              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Give your story a name..."
                className={`mb-6 w-full rounded-2xl border px-4 py-4 text-xl font-bold outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 ${field}`}
              />

              <div
                className={`mb-4 flex items-center justify-between border-b pb-3 ${
                  darkMode ? "border-[#363951]" : "border-[#f0e8e5]"
                }`}
              >
                <label
                  htmlFor="note-content"
                  className="text-xs font-bold uppercase tracking-widest text-violet-500"
                >
                  Your thoughts
                </label>

                <span className={`text-xs ${muted}`}>
                  {content.trim()
                    ? content.trim().split(/\s+/).length
                    : 0}{" "}
                  words
                </span>
              </div>

              <textarea
                id="note-content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder={
                  "Once upon a time...\n\nWrite down your ideas, plans, dreams, or anything on your mind. This page is yours. 🌷"
                }
                rows={13}
                className={`w-full resize-y rounded-2xl border p-4 text-sm leading-7 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 ${field}`}
              />

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <p className={`text-xs ${muted}`}>
                  💗 Every great idea starts somewhere.
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={createNewNote}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition hover:opacity-80 ${panel}`}
                  >
                    Clear / New
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving
                      ? "Saving..."
                      : selectedId
                      ? "♡ Save changes"
                      : "✦ Save note"}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <footer className={`py-7 text-center text-xs ${muted}`}>
          Made with 💜, a little imagination, and lots of sakura magic.
        </footer>
      </div>
    </main>
  );
}
