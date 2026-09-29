function UserProfileCard({
  name,
  role,
  email,
  location,
  skills,
  image,
  bio = "Default",
  stats,
  verified,
  onContact
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Cover + Profile */}
      <div className="relative">

        {/* Cover */}
        <div className="h-20 bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900"></div>

        {/* Profile Image */}
        <div className="absolute left-5 top-10">
          <img
            src={image}
            alt={name}
            className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

      </div>


      {/* Content */}
      <div className="px-5 pb-5 pt-12">

        {/* Name + Verified */}
        <div className="flex items-center gap-2">

          <h2 className="text-xl font-bold text-gray-900">
            {name}
          </h2>

          {verified && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
              ✓
            </span>
          )}

        </div>


        {/* Role */}
        <p className="mt-1 text-sm font-semibold text-purple-600">
          {role}
        </p>


        {/* Location */}
        <p className="mt-2 text-xs text-gray-500">
          📍 {location.city}, {location.state}
        </p>


        {/* Bio */}
        <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-600">
          {bio}
        </p>


        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5">

          {skills.slice(0, 3).map((skill) => (
            <span
              key={skill.name}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {skill.name}
            </span>
          ))}

        </div>


        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 rounded-xl bg-gray-50 py-3 text-center">

          <div>
            <p className="text-sm font-bold text-gray-900">
              {stats.followers}
            </p>

            <p className="text-[10px] text-gray-500">
              Followers
            </p>
          </div>


          <div className="border-x border-gray-200">

            <p className="text-sm font-bold text-gray-900">
              {stats.projects}
            </p>

            <p className="text-[10px] text-gray-500">
              Projects
            </p>

          </div>


          <div>

            <p className="text-sm font-bold text-gray-900">
              {stats.repositories}
            </p>

            <p className="text-[10px] text-gray-500">
              Repos
            </p>

          </div>

        </div>


        {/* Email + Button */}
        <div className="mt-4 flex items-center justify-between gap-2">

          <p className="truncate text-xs text-gray-500">
            {email}
          </p>

          <button
            onClick={onContact}
            className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-700"
          >
            Contact
          </button>

        </div>

      </div>
    </div>
  );
}


function handleContact() {
  console.log("contact clicked");
}


function ComplexProps() {

  const users = [

    // =========================
    // ADITYA
    // =========================

    {
      name: "Aditya Kumar",
      role: "Full Stack Developer",
      email: "aditya@gmail.com",

      location: {
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India"
      },

      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",

      bio:
        "Building scalable web applications with React and Node.js.",

      skills: [
        {
          name: "React",
          level: "Advanced",
          experience: "2 years"
        },
        {
          name: "Node.js",
          level: "Advanced",
          experience: "2 years"
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          experience: "1 year"
        }
      ],

      stats: {
        followers: 1200,
        projects: 18,
        repositories: 32
      },

      verified: true
    },


    // =========================
    // AMIT
    // =========================

    {
      name: "Amit Sharma",
      role: "Backend Developer",
      email: "amit@gmail.com",

      location: {
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India"
      },

      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      bio:
        "Building reliable backend and cloud applications.",

      skills: [
        {
          name: "Java",
          level: "Advanced",
          experience: "3 years"
        },
        {
          name: "Spring Boot",
          level: "Advanced",
          experience: "2 years"
        },
        {
          name: "AWS",
          level: "Intermediate",
          experience: "1 year"
        }
      ],

      stats: {
        followers: 850,
        projects: 12,
        repositories: 24
      },

      verified: true
    },


    // =========================
    // RAHUL
    // =========================

    {
      name: "Rahul Singh",
      role: "Frontend Developer",
      email: "rahul@gmail.com",

      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
      },

      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

      bio:
        "Creating modern and interactive frontend experiences.",

      skills: [
        {
          name: "React",
          level: "Advanced",
          experience: "2 years"
        },
        {
          name: "Next.js",
          level: "Intermediate",
          experience: "1 year"
        },
        {
          name: "Tailwind",
          level: "Advanced",
          experience: "2 years"
        }
      ],

      stats: {
        followers: 2100,
        projects: 25,
        repositories: 41
      },

      verified: true
    },


    // =========================
    // PRIYA
    // =========================

    {
      name: "Priya Das",
      role: "Software Engineer",
      email: "priya@gmail.com",

      location: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India"
      },

      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

      bio:
        "Developing clean, scalable and maintainable software.",

      skills: [
        {
          name: "Python",
          level: "Advanced",
          experience: "3 years"
        },
        {
          name: "Django",
          level: "Advanced",
          experience: "2 years"
        },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          experience: "2 years"
        }
      ],

      stats: {
        followers: 980,
        projects: 16,
        repositories: 29
      },

      verified: true
    }

  ];


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* CARD GRID */}

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">

        {users.map((user) => (

          <UserProfileCard
            key={user.name}
            onContact={handleContact}
            name={user.name}
            role={user.role}
            email={user.email}
            location={user.location}
            skills={user.skills}
            image={user.image}
            bio={user.bio}
            stats={user.stats}
            verified={user.verified}
          />

        ))}

      </div>

    </div>
  );
}


export default ComplexProps;