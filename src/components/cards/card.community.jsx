export const CommunityCard = () => {
  return (
    <div className="card card-compact bg-base-100 w-72 md:w-80 lg:w-96 shadow-xl">
      <figure className="md:h-40 lg:h-48">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/sumter-landing-bicycle-club-2018-cross-florida-052d-day-one-cobbles-of-old-tampa-road-1780473758.jpg"
          alt="Sepeda"
        />
      </figure>
      <div className="card-body gap-1">
        <h2 className="card-title">Jakarta Fun Bicycle <div className="badge badge-outline">Private</div></h2>
          <p className="w-fit">Sepeda | Jakarta</p>
      </div>
    </div>
  );
};
