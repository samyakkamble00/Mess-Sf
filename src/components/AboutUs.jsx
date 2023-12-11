import React from "react";

const AboutUs = () => {
  const emailAddress = `meshthali@gmail.com`;
  const phoneNo = ` +918421835869`;
  return (
    <div>
      <h1 className="font-bold  text-gray-700">About Us</h1>
      <h3 className="font-semibold p-4 text-gray-500">
        Welcome to Meshthali, a venture by Telphatech LLP - Your Ultimate
        Destination for Mesh Listings!
      </h3>
      <h2 className="font-bold  text-gray-700">Mission Statement</h2>
      <p className="p-4 text-gray-500">
        At MeshThali, under the umbrella of Telphatech LLP, our mission is to
        connect people with the nearest mesh providers around them. We believe
        in the power of technology to simplify and enhance the way people find
        and connect with mesh services. Our platform is designed to make your
        search for the perfect mesh as convenient and efficient as possible.
      </p>
      <h2 className="font-bold  text-gray-700">Our Vision</h2>
      <p className="p-4 text-gray-500">
        We envision a world where finding the right mesh is a hassle-free
        experience, where every individual can access the nearest mesh provider
        in their area with ease. Our vision is to become the go-to platform for
        all your mesh-related needs.
      </p>
      <h2 className="font-bold  text-gray-700">What We Offer</h2>
      <ul className="p-4 text-gray-500">
        <li className="list-disc m-4 text-gray-500">
          Comprehensive Mesh Listings: We provide a vast database of mesh
          providers in your local area, so you can easily find the services you
          need.
        </li>
        <li className="list-disc m-4 text-gray-500">
          User-Friendly Experience: Our website is designed with user
          convenience in mind. Search for mesh providers, read reviews, and make
          informed decisions effortlessly.
        </li>
        <li className="list-disc m-4 text-gray-500">
          Community-Driven Reviews: We encourage our users to share their
          experiences and rate mesh providers, helping others make informed
          choices.
        </li>
        <li className="list-disc m-4 text-gray-500">
          Support and Assistance: Our dedicated support team, backed by
          Telphatech LLP, is always ready to assist you with any questions or
          concerns.
        </li>
      </ul>
      <h2 className="font-bold  text-gray-700">Contact Us</h2>
      <p className="p-4 text-gray-500">
        We value your feedback and questions. Please feel free to reach out to
        us.
        <ul className="p-4 text-gray-500">
          <li>
            Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>{" "}
          </li>
          <li>
            Phone: <a href={`tel:${phoneNo}`}>{phoneNo}</a>
          </li>
          <li>Address: Pimple Gurav, Pune</li>
        </ul>
      </p>
      <h2 className="font-bold  text-gray-700">Partnerships</h2>
      <p className="p-4 text-gray-500">
        We are proud to work with trusted partners who share our commitment to
        improving the mesh experience for everyone.
      </p>
      <h2 className="font-bold  text-gray-700">Join Us</h2>
      <p className="p-4 text-gray-500">
        If you're interested in being a part of our team or becoming a MeshThali
        partner, please contact us for collaboration opportunities.
      </p>
    </div>
  );
};

export default AboutUs;
