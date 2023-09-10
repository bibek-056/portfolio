import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
  GeoJSON,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = () => {
  var geoJsonData = [
    {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [85.3054542662469, 27.706281042407056],
              [85.32148353423992, 27.706115383976297],
              [85.32622370687585, 27.71058807331778],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [
                [85.31388937407888, 27.70860108138625],
                [85.31388937407888, 27.70812105146578],
                [85.3145332450041, 27.70812105146578],
                [85.3145332450041, 27.70860108138625],
                [85.31388937407888, 27.70860108138625],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [
                [85.31628926043987, 27.703119406091062],
                [85.3165015228999, 27.703837555023952],
                [85.31361394276769, 27.70394493028759],
                [85.31390847594145, 27.70289673867839],
                [85.31514436023747, 27.702559269969697],
                [85.31628926043987, 27.703119406091062],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [
                [85.31846611497713, 27.71678988861474],
                [85.31763192006287, 27.716518319243605],
                [85.3176265381602, 27.71567025615171],
                [85.31841767785227, 27.7152176355103],
                [85.31913885280966, 27.71567025615171],
                [85.31914961661522, 27.716456382274643],
                [85.31846611497713, 27.71678988861474],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [85.31856549236272, 27.71413149220008],
                [85.31842030061826, 27.714125177594767],
                [85.3182765071997, 27.714106294594085],
                [85.3181354969644, 27.714075025058133],
                [85.3179986279623, 27.714031670140113],
                [85.3178672183556, 27.713976647385714],
                [85.31774253372252, 27.71391048671133],
                [85.31762577486798, 27.71383382530006],
                [85.31751806625812, 27.713747401464488],
                [85.31742044519066, 27.713652047535543],
                [85.31733385180496, 27.71354868184584],
                [85.31725912002801, 27.713438299884753],
                [85.317196969544, 27.71332196471055],
                [85.31714799886419, 27.713200796711746],
                [85.31711267956409, 27.71307596281652],
                [85.31709135174357, 27.71294866525402],
                [85.31708422075307, 27.712820129975825],
                [85.31709135521793, 27.712691594849087],
                [85.31711268637926, 27.712564297735184],
                [85.31714800875827, 27.71243946456843],
                [85.3171969821368, 27.71231829754998],
                [85.31725913483558, 27.712201963570337],
                [85.31733386825823, 27.71209158297213],
                [85.31742046265737, 27.71198821876122],
                [85.31751808406702, 27.711892866370178],
                [85.3176257923347, 27.711806444072504],
                [85.31774255017582, 27.711729784140037],
                [85.31786723316317, 27.711663624828525],
                [85.31799864055509, 27.711608603268687],
                [85.31813550685848, 27.711565249331024],
                [85.31827651401488, 27.711533980523537],
                [85.31842030409263, 27.711515097971454],
                [85.31856549236272, 27.711508783517598],
                [85.31871068063285, 27.711515097971454],
                [85.31885447071056, 27.711533980523537],
                [85.31899547786696, 27.711565249331024],
                [85.31913234417036, 27.711608603268687],
                [85.31926375156229, 27.711663624828525],
                [85.31938843454962, 27.711729784140037],
                [85.31950519239075, 27.711806444072504],
                [85.31961290065843, 27.711892866370178],
                [85.31971052206806, 27.71198821876122],
                [85.31979711646721, 27.71209158297213],
                [85.31987184988989, 27.712201963570337],
                [85.31993400258864, 27.71231829754998],
                [85.31998297596718, 27.71243946456843],
                [85.3200182983462, 27.712564297735184],
                [85.32003962950753, 27.712691594849087],
                [85.32004676397237, 27.712820129975825],
                [85.32003963298187, 27.71294866525402],
                [85.32001830516135, 27.71307596281652],
                [85.31998298586127, 27.713200796711746],
                [85.31993401518143, 27.71332196471055],
                [85.31987186469743, 27.713438299884753],
                [85.31979713292051, 27.71354868184584],
                [85.31971053953478, 27.713652047535543],
                [85.31961291846734, 27.713747401464488],
                [85.31950520985748, 27.71383382530006],
                [85.31938845100292, 27.71391048671133],
                [85.31926376636986, 27.713976647385714],
                [85.31913235676315, 27.714031670140113],
                [85.31899548776106, 27.714075025058133],
                [85.31885447752575, 27.714106294594085],
                [85.31871068410719, 27.714125177594767],
                [85.31856549236272, 27.71413149220008],
              ],
            ],
          },
        },
      ],
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("../Assets/location.png"),
    iconSize: [38, 38],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoPosition) => {
      setPosition([geoPosition.coords.latitude, geoPosition.coords.longitude]);
    });
  }, []);

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        map.locate(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position === null ? null : (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={{
          drag: (e) => {
            handleMarkerDragEnd(e);
          },
        }}
        icon={customIcon}
      >
        <Popup>{address}</Popup>
      </Marker>
    );
  };

  const [position, setPosition] = useState();
  const [address, setAddress] = useState("");
  const [ search, setSearch ] = useState({
    address: ""
  });
  const mapRef = useRef();

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      setAddress(response.data.display_name);
      console.log(address)
    } catch (error) {
      setAddress("Error fetching address");
      console.error(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      function (error) {
        setPosition([27.708, 85.314]);
      }
    );
  }, []);

  useEffect(() => {
    if (position) {
      reverseGeocode(position[0], position[1]);
      updateMapCenter();
    }
  }, [position]);

  const handleMarkerDragEnd = (e) => {
    const marker = e.target;
    const newPosition = marker.getLatLng();
    setPosition([newPosition.lat, newPosition.lng]);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleGeoCoding = async () => {
    const response = await axios.get (`https://nominatim.openstreetmap.org/search?q=${search.address}&format=geojson&limit=1`)
    console.log(response);
    setPosition([response.data.features[0].geometry.coordinates[1], response.data.features[0].geometry.coordinates[0]] )
    console.log(position);
  }

  const updateMapCenter = () => {
    if (mapRef.current) {
      mapRef.current.setView(position, mapRef.current.getZoom());
    }
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] md:py-10">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full relative">
        {position ? (
          <>
            <div className="flex items-center gap-2">
              <input
                className="h-8 w-fit rounded p-2"
                name="address"
                type="string"
                placeholder="Search Here"
                onChange={handleChange}
              ></input>
              <button className="border rounded bg-[#006EB9] text-white p-2 text-xs" onClick={handleGeoCoding}>Search Now</button>
            </div>
            <MapContainer
              center={position}
              zoom={10}
              scrollWheelZoom={false}
              style={{ height: "80%", width: "80%" }}
              onClick={(e) => handleMarkerDragEnd(e)}
              whenCreated={(map) => (mapRef.current = map)}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {geoJsonData && <GeoJSON data={geoJsonData} />}
              <Marker
                position={position}
                draggable={true}
                eventHandlers={{
                  dragend: (e) => {
                    handleMarkerDragEnd(e);
                  },
                }}
                icon={customIcon}
              >
                <Popup>{address}</Popup>
              </Marker>
              <ScaleControl position="topright" />
              <LocationMarker />
            </MapContainer>
          </>
        ) : (
          <p>Loading Your Map...</p>
        )}
      </div>
    </div>
  );
};

export default Map;
