import Pin from "./assets/mappin.png";

export default function Card ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <article className="flex gap-x-6">
      <img src={imageUrl} alt={title} className="w-[126px] h-[168px] rounded-md" />
      <section className="self-center">
        <div className="flex gap-x-2">
          <img src={Pin} alt="Map Pin Icon" className="self-center" />
          <p>{location}</p>
          <p className="text-[#918E9B] underline"><a href={googleMapsUrl} target="_blank">View on Google Maps</a></p>
        </div>
        <h2 className="text-[25px] font-bold mb-6">{title}</h2>
        <p className="text-[10.24px] font-bold">{`${startDate} - ${endDate}`}</p>
        <p>{description}</p>
      </section>
    </article>
  )
}