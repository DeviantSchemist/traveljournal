import Pin from "./assets/mappin.png";

export default function Card ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <article className="flex gap-x-6 ml-[2.4375em] mt-[2.25em] mr-[2.5em]">
      <img src={imageUrl} alt={title} className="w-[7.875rem] h-[10.5rem] rounded-md" />
      <section className="self-center">
        <div className="flex gap-x-2">
          <img src={Pin} alt="Map Pin Icon" className="self-center" />
          <p>{location}</p>
          <p className="text-[#918E9B] underline"><a href={googleMapsUrl} target="_blank">View on Google Maps</a></p>
        </div>
        <h2 className="text-[1.5625rem] font-bold mb-6">{title}</h2>
        <p className="text-[0.64rem] font-bold">{`${startDate} - ${endDate}`}</p>
        <p>{description}</p>
      </section>
    </article>
  )
}