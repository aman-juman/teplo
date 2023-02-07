import styles from "./Map.module.scss";
const Map = () => (
    <section className={styles.section}>
        <div className="container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.7587875946174!2d69.63134392671762!3d42.347665822365734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91dfb1449dd6b%3A0xceb619d4f50e39ee!2z0JHQuNC30L3QtdGBINGG0LXQvdGC0YAgIlpBTkdBUiI!5e0!3m2!1sen!2skz!4v1675685805599!5m2!1sen!2skz"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            >

            </iframe>
        </div>
    </section>
);

export default Map;



// import GoogleMapReact from 'google-map-react'
// import styles from "./Map.module.scss";
// import LocationPin from "@/components/map/LocationPin";
// const Map = () => {
//     const location = {
//         address: '1600 Amphitheatre Parkway, Mountain View, california.',
//         lat: 43.238949,
//         lng: 76.889709,
//     }
//
//     return (
//         <div className={styles.map}>
//             <h2 className={styles.mapH2}>Come Visit Us At Our Campus</h2>
//
//             <div className={styles.googleMap}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyDNSPUopq3oUB3CWDkFwKIuGpxJ_4uMNbo" }}
//                     defaultCenter={location}
//                     defaultZoom={10}
//                 >
//                     <LocationPin
//                         lat={location.lat}
//                         lng={location.lng}
//                         text={location.address}
//                     />
//                 </GoogleMapReact>
//             </div>
//         </div>
//     );
// };
//
// export default Map;
