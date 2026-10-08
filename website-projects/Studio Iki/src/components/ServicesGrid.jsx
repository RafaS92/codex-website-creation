import { services } from "../data/content";
import { CardServices } from "./CardServices";

export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service) => (
        <CardServices key={service.id} service={service} />
      ))}
    </div>
  );
}
