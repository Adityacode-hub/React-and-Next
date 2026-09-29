function JobCard({ job }) {
  return (
    <div className="job-card">
      {/* Top Section */}
      <div className="job-header">
        <img src={job.brandLogo} alt={job.company} />
        <div>
          <h2>{job.company}</h2>
          <p className="posted">{job.posted}</p>
        </div>
      </div>

      {/* Role */}
      <h3 className="role">{job.role}</h3>

      {/* Tags */}
      <div className="tags">
        <span className="tag">{job.tag1}</span>
        <span className="tag secondary">{job.tag2}</span>
      </div>

      {/* Info */}
      <div className="info">
        <p>💰 {job.pay}</p>
        <p>📍 {job.location}</p>
      </div>

      {/* Button */}
      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobCard;