export default function Products() {
    return (
        <main className="min-h-screen bg-[#e9e4d9] p-5 md:p-10">

            <div className="mx-auto min-h-[750px] max-w-4xl bg-[#f8f6f0] px-8 py-10 md:px-16">

                {/* Magazine Header */}
                <header className="border-b border-black pb-4 text-center">
                    <h1 className="text-7xl font-black uppercase tracking-tighter text-black md:text-9xl">
                        Products
                    </h1>

                    <div className="mt-2 flex justify-between text-xs font-medium uppercase tracking-widest">
                        <span>Volume 01</span>
                        <span>November 2026</span>
                        <span>Edition No. 01</span>
                    </div>
                </header>

                {/* Cover Content */}
                <section className="mt-16">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                        The Collection / 2026
                    </p>

                    <h2 className="mt-5 max-w-2xl text-6xl font-serif leading-[1.05] tracking-tight text-black md:text-8xl">
                        Discover
                        <br />
                        Something
                        <br />
                        Different.
                    </h2>

                    <p className="mt-8 max-w-sm text-base leading-7 text-gray-600">
                        Explore our latest collection of products,
                        thoughtfully selected for those who appreciate
                        simplicity and style.
                    </p>

                </section>

                {/* Cover Headlines */}
                <section className="mt-20 grid grid-cols-2 gap-8 border-t border-black pt-6">

                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Inside this issue
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-black">
                            The Art of Choosing Better.
                        </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Featured
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-black">
                            New Arrivals.
                        </h3>
                    </div>

                </section>

                {/* Footer */}
                <footer className="mt-16 border-t border-black pt-4 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                        A Different Perspective
                    </p>
                </footer>

            </div>
        </main>
    );
}