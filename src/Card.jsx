import Pin from "./assets/mappin.png";

export default function Card ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <article className="flex">
      <img src={imageUrl} alt={title} className="w-[125px] h-[168px]" />
      <section>
        <div>
          <img src={Pin} alt="Map Pin Icon" className="inline-block" />
          <span>{location}</span>
          <span className="text-[#918E9B] underline"><a href={googleMapsUrl} target="_blank">View on Google Maps</a></span>
        </div>
        <h2 className="text-[25px] font-bold">{title}</h2>
        <p className="text-[10.24px] font-bold">{`${startDate} - ${endDate}`}</p>
        <p>{description}</p>
      </section>
    </article>
  )
}