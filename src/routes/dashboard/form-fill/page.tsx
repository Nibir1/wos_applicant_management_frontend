import { useState } from "react";
import axios from "axios";

import "./form-fillup.css";

const dotenv = require("dotenv");
dotenv.config();

export default function FormFillPage() {
  const [
    applicants_personal_email_Address,
    setApplicants_personal_email_Address,
  ] = useState("");

  const [name_provided, setName_provided] = useState("");
  const [sex, setSex] = useState("");
  const [marital_status, setMarital_status] = useState("");
  const [applicants_date_of_birth, setApplicants_date_of_birth] = useState("");
  const [place_of_birth, setPlace_of_birth] = useState("");
  const [national_identification_number, setNational_identification_number] =
    useState("");
  const [home_address, setHome_address] = useState("");
  const [city, setCity] = useState("");
  const [postal_zone_ZIP_code, setPostal_zone_ZIP_code] = useState("");
  const [same_mailing_address, setSame_mailing_address] = useState("");
  const [primary_phone_number, setPrimary_phone_number] = useState("");
  const [secondary_phone_number, setSecondary_phone_number] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [additional_email_address, setAdditional_email_address] = useState("");
  const [social_media_platform, setSocial_media_platform] = useState("");
  const [social_media_identifier, setSocial_media_identifier] = useState("");
  const [passport_travel_document_type, setPassport_travel_document_type] =
    useState("");
  const [passport_travel_document_number, setPassport_travel_document_number] =
    useState("");
  const [passport_issuance_date, setPassport_issuance_date] = useState("");
  const [passport_expiration_date, setPassport_expiration_date] = useState("");
  const [purpose_of_trip_to_the_U_S, setPurpose_of_trip_to_the_U_S] =
    useState("");
  const [intended_date_of_arrival, setIntended_date_of_arrival] = useState("");
  const [intended_length_of_stay_in_U_S, setIntended_length_of_stay_in_U_S] =
    useState("");
  const [
    address_where_you_will_stay_in_the_U_S,
    setAddress_where_you_will_stay_in_the_U_S,
  ] = useState("");
  const [person_paying_for_your_trip, setPerson_paying_for_your_trip] =
    useState("");
  const [paying_persons_telephone_number, setPaying_persons_telephone_number] =
    useState("");
  const [paying_persons_email_address, setPaying_persons_email_address] =
    useState("");
  const [
    paying_persons_relationship_to_you,
    setPaying_persons_relationship_to_you,
  ] = useState("");
  const [contact_person_name_in_the_U_S, setContact_person_name_in_the_U_S] =
    useState("");
  const [organization_name_in_the_U_S, setOrganization_name_in_the_U_S] =
    useState("");
  const [
    paying_persons_relationship_to_you2nd,
    setPaying_persons_relationship_to_you2nd,
  ] = useState("");

  const [us_contact_address, setUs_contact_address] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email_address2nd, setEmail_address2nd] = useState("");
  const [fathers_surnames, setFathers_surnames] = useState("");
  const [fathers_given_names, setFathers_given_names] = useState("");
  const [fathers_date_of_birth, setFathers_date_of_birth] = useState("");
  const [is_your_father_in_the_U_S, setIs_your_father_in_the_U_S] =
    useState("");
  const [mothers_surnames, setMothers_surnames] = useState("");
  const [mothers_given_names, setMothers_given_names] = useState("");
  const [mothers_date_of_birth, setMothers_date_of_birth] = useState("");
  const [is_your_mother_in_the_U_S, setIs_your_mother_in_the_U_S] =
    useState("");
  const [primary_occupation, setPrimary_occupation] = useState("");
  const [present_employer_or_school_name, setPresent_employer_or_school_name] =
    useState("");
  const [address, setAddress] = useState("");
  const [city2nd, setCity2nd] = useState("");
  const [postal_zone_ZIP_code2nd, setPostal_zone_ZIP_code2nd] = useState("");
  const [country_region, setCountry_region] = useState("");
  const [work_phone_number, setWork_phone_number] = useState("");
  const [name_of_institution, setName_of_institution] = useState("");
  const [city_of_institution, setCity_of_institution] = useState("");
  const [
    postal_zone_ZIP_code_of_institution,
    setPostal_zone_ZIP_code_of_institution,
  ] = useState("");
  const [country_region_of_institution, setCountry_region_of_institution] =
    useState("");
  const [course_of_study, setCourse_of_study] = useState("");
  const [date_of_attendance_from, setDate_of_attendance_from] = useState("");
  const [date_of_attendance_to, setDate_of_attendance_to] = useState("");
  const [language_name_1, setLanguage_name_1] = useState("");
  const [language_name_2, setLanguage_name_2] = useState("");
  const [name_of_organization_1, setName_of_organization_1] = useState("");
  const [name_of_organization_2, setName_of_organization_2] = useState("");
  const [name_of_organization_3, setName_of_organization_3] = useState("");
  const [name_of_organization_4, setName_of_organization_4] = useState("");
  const [name_of_organization_5, setName_of_organization_5] = useState("");
  const [name_1, setName_1] = useState("");
  const [name1_street_address, setName1_street_address] = useState("");
  const [name1_city, setName1_city] = useState("");
  const [name1_postal_zone_ZIP_code, setName1_postal_zone_ZIP_code] =
    useState("");
  const [name1_country_region, setName1_country_region] = useState("");
  const [name1_telephone_number, setName1_telephone_number] = useState("");
  const [name1_email_address, setName1_email_address] = useState("");

  const [name_2, setName_2] = useState("");
  const [name2_street_address, setName2_street_address] = useState("");
  const [name2_city, setName2_city] = useState("");
  const [name2_postal_zone_ZIP_code, setName2_postal_zone_ZIP_code] =
    useState("");
  const [name2_country_region, setName2_country_region] = useState("");
  const [name2_telephone_number, setName2_telephone_number] = useState("");
  const [name2_email_address, setName2_email_address] = useState("");
  const [sevis_id, setSevis_id] = useState("");
  const [name_of_school, setName_of_school] = useState("");
  const [course_of_study2nd, setCourse_of_study2nd] = useState("");
  const [street_address, setStreet_address] = useState("");

  /** This function is responsible to take the applicants informations
   *  and store them into applicants table to create a new applicant
   */
  const addDS160Informations = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "applicants_personal_email_Address",
      applicants_personal_email_Address
    );
    formData.append("name_provided", name_provided);
    formData.append("sex", sex);
    formData.append("marital_status", marital_status);
    formData.append("applicants_date_of_birth", applicants_date_of_birth);
    formData.append("place_of_birth", place_of_birth);
    formData.append(
      "national_identification_number",
      national_identification_number
    );
    formData.append("home_address", home_address);
    formData.append("city", city);
    formData.append("postal_zone_ZIP_code", postal_zone_ZIP_code);
    formData.append("same_mailing_address", same_mailing_address);
    formData.append("primary_phone_number", primary_phone_number);
    formData.append("secondary_phone_number", secondary_phone_number);
    formData.append("email_address", email_address);
    formData.append("additional_email_address", additional_email_address);
    formData.append("social_media_platform", social_media_platform);
    formData.append("social_media_identifier", social_media_identifier);
    formData.append(
      "passport_travel_document_type",
      passport_travel_document_type
    );
    formData.append(
      "passport_travel_document_number",
      passport_travel_document_number
    );
    formData.append("passport_issuance_date", passport_issuance_date);
    formData.append("passport_expiration_date", passport_expiration_date);
    formData.append("purpose_of_trip_to_the_U_S", purpose_of_trip_to_the_U_S);
    formData.append("intended_date_of_arrival", intended_date_of_arrival);
    formData.append(
      "intended_length_of_stay_in_U_S",
      intended_length_of_stay_in_U_S
    );
    formData.append(
      "address_where_you_will_stay_in_the_U_S",
      address_where_you_will_stay_in_the_U_S
    );
    formData.append("person_paying_for_your_trip", person_paying_for_your_trip);
    formData.append(
      "paying_persons_telephone_number",
      paying_persons_telephone_number
    );
    formData.append(
      "paying_persons_email_address",
      paying_persons_email_address
    );
    formData.append(
      "paying_persons_relationship_to_you",
      paying_persons_relationship_to_you
    );
    formData.append(
      "contact_person_name_in_the_U_S",
      contact_person_name_in_the_U_S
    );
    formData.append(
      "organization_name_in_the_U_S",
      organization_name_in_the_U_S
    );
    formData.append(
      "paying_persons_relationship_to_you2nd",
      paying_persons_relationship_to_you2nd
    );

    formData.append("us_contact_address", us_contact_address);
    formData.append("phone_number", phone_number);
    formData.append("email_address2nd", email_address2nd);
    formData.append("fathers_surnames", fathers_surnames);
    formData.append("fathers_given_names", fathers_given_names);
    formData.append("fathers_date_of_birth", fathers_date_of_birth);
    formData.append("is_your_father_in_the_U_S", is_your_father_in_the_U_S);
    formData.append("mothers_surnames", mothers_surnames);
    formData.append("mothers_given_names", mothers_given_names);
    formData.append("mothers_date_of_birth", mothers_date_of_birth);
    formData.append("is_your_mother_in_the_U_S", is_your_mother_in_the_U_S);
    formData.append("primary_occupation", primary_occupation);
    formData.append(
      "present_employer_or_school_name",
      present_employer_or_school_name
    );
    formData.append("address", address);
    formData.append("city2nd", city2nd);
    formData.append("postal_zone_ZIP_code2nd", postal_zone_ZIP_code2nd);
    formData.append("country_region", country_region);
    formData.append("work_phone_number", work_phone_number);
    formData.append("name_of_institution", name_of_institution);
    formData.append("city_of_institution", city_of_institution);
    formData.append(
      "postal_zone_ZIP_code_of_institution",
      postal_zone_ZIP_code_of_institution
    );
    formData.append(
      "country_region_of_institution",
      country_region_of_institution
    );
    formData.append("course_of_study", course_of_study);
    formData.append("date_of_attendance_from", date_of_attendance_from);
    formData.append("date_of_attendance_to", date_of_attendance_to);
    formData.append("language_name_1", language_name_1);
    formData.append("language_name_2", language_name_2);
    formData.append("name_of_organization_1", name_of_organization_1);
    formData.append("name_of_organization_2", name_of_organization_2);
    formData.append("name_of_organization_3", name_of_organization_3);
    formData.append("name_of_organization_4", name_of_organization_4);
    formData.append("name_of_organization_5", name_of_organization_5);
    formData.append("name_1", name_1);
    formData.append("name1_street_address", name1_street_address);
    formData.append("name1_city", name1_city);
    formData.append("name1_postal_zone_ZIP_code", name1_postal_zone_ZIP_code);
    formData.append("name1_country_region", name1_country_region);
    formData.append("name1_telephone_number", name1_telephone_number);
    formData.append("name1_email_address", name1_email_address);
    formData.append("name_2", name_2);
    formData.append("name2_street_address", name2_street_address);
    formData.append("name2_city", name2_city);
    formData.append("name2_postal_zone_ZIP_code", name2_postal_zone_ZIP_code);
    formData.append("name2_country_region", name2_country_region);
    formData.append("name2_telephone_number", name2_telephone_number);
    formData.append("name2_email_address", name2_email_address);
    formData.append("sevis_id", sevis_id);
    formData.append("name_of_school", name_of_school);
    formData.append("course_of_study2nd", course_of_study2nd);
    formData.append("street_address", street_address);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/insert_ds160_infos`, formData)
      .then((response) => {
        if (response.data.Status === "Success") {
          console.log("Succeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => console.log(error));
    setTimeout(() => {
      // code to execute after 3 seconds
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="dashboard-page">
      <form className="form-fillup-container" onSubmit={addDS160Informations}>
        <section className="user-input email">
          <label>Please Provide Applicant's Personal Email Address</label>
          <input
            type="text"
            value={applicants_personal_email_Address}
            onChange={(e) => {
              setApplicants_personal_email_Address(e.target.value);
            }}
          />
        </section>

        <section className="user-input">
          <h1>
            Personal, Address, Phone, and Passport/Travel Document Information
          </h1>

          <section className="user-input">
            <label>Name Provided</label>
            <input
              type="text"
              value={name_provided}
              onChange={(e) => {
                setName_provided(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Sex</label>
            <select
              name="sex"
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Prefer not to answer">Prefer Not To Answer</option>
            </select>
          </section>

          <section className="user-input">
            <label>Marital Status</label>
            <select
              name="Marital Status"
              value={marital_status}
              onChange={(e) => {
                setMarital_status(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
              <option value="Divorced">Divorced</option>
              <option value="Prefer not to answer">Prefer Not To Answer</option>
            </select>
          </section>

          <section className="label-input">
            <label>Applicant's Date of Birth</label>
            <input
              type="text"
              value={applicants_date_of_birth}
              onChange={(e) => {
                setApplicants_date_of_birth(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Place of Birth</label>
            <input
              type="text"
              value={place_of_birth}
              onChange={(e) => {
                setPlace_of_birth(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>National Identification Number</label>
            <input
              type="text"
              value={national_identification_number}
              onChange={(e) => {
                setNational_identification_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Home Address</label>
            <input
              type="text"
              value={home_address}
              onChange={(e) => {
                setHome_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Postal Zone/ZIP Code</label>
            <input
              type="text"
              value={postal_zone_ZIP_code}
              onChange={(e) => {
                setPostal_zone_ZIP_code(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Same Mailing Address</label>
            <select
              name="Same Mailing Address"
              value={same_mailing_address}
              onChange={(e) => {
                setSame_mailing_address(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </section>

          <section className="user-input">
            <label>Primary Phone Number</label>
            <input
              type="text"
              value={primary_phone_number}
              onChange={(e) => {
                setPrimary_phone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Secondary Phone Number</label>
            <input
              type="text"
              value={secondary_phone_number}
              onChange={(e) => {
                setSecondary_phone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Email Address</label>
            <input
              type="email"
              value={email_address}
              onChange={(e) => {
                setEmail_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Additional Email Address</label>
            <input
              type="email"
              value={additional_email_address}
              onChange={(e) => {
                setAdditional_email_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Social Media Platform</label>
            <select
              name="Social Media Platform"
              value={social_media_platform}
              onChange={(e) => {
                setSocial_media_platform(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="Prefer not to answer">Prefer Not To Answer</option>
            </select>
          </section>
          <section className="user-input">
            <label>Social Media Identifier</label>
            <input
              type="text"
              value={social_media_identifier}
              onChange={(e) => {
                setSocial_media_identifier(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Passport/Travel Document Type</label>
            <input
              type="text"
              value={passport_travel_document_type}
              onChange={(e) => {
                setPassport_travel_document_type(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Passport/Travel Document Number</label>
            <input
              type="text"
              value={passport_travel_document_number}
              onChange={(e) => {
                setPassport_travel_document_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Passport Issuance Date</label>
            <input
              type="text"
              value={passport_issuance_date}
              onChange={(e) => {
                setPassport_issuance_date(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Passport Expiration Date</label>
            <input
              type="text"
              value={passport_expiration_date}
              onChange={(e) => {
                setPassport_expiration_date(e.target.value);
              }}
            />
          </section>
        </section>

        <section className="user-input">
          <h1>Travel Information</h1>

          <section className="user-input">
            <label>Purpose of Trip to the U.S</label>
            <input
              type="text"
              value={purpose_of_trip_to_the_U_S}
              onChange={(e) => {
                setPurpose_of_trip_to_the_U_S(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Intended Date of Arrival</label>
            <input
              type="text"
              value={intended_date_of_arrival}
              onChange={(e) => {
                setIntended_date_of_arrival(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Intended Length of Stay in U.S</label>
            <input
              type="text"
              value={intended_length_of_stay_in_U_S}
              onChange={(e) => {
                setIntended_length_of_stay_in_U_S(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Address where you will stay in the U.S</label>
            <input
              type="text"
              value={address_where_you_will_stay_in_the_U_S}
              onChange={(e) => {
                setAddress_where_you_will_stay_in_the_U_S(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Person Paying for Your Trip</label>
            <input
              type="text"
              value={person_paying_for_your_trip}
              onChange={(e) => {
                setPerson_paying_for_your_trip(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Telephone Number</label>
            <input
              type="text"
              value={paying_persons_telephone_number}
              onChange={(e) => {
                setPaying_persons_telephone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Email Address</label>
            <input
              type="email"
              value={paying_persons_email_address}
              onChange={(e) => {
                setPaying_persons_email_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Relationship To You</label>
            <input
              type="text"
              value={paying_persons_relationship_to_you}
              onChange={(e) => {
                setPaying_persons_relationship_to_you(e.target.value);
              }}
            />
          </section>
        </section>

        <section className="user-input">
          <h1>U.S Contact Information</h1>

          <section className="user-input">
            <label>Contact Person Name in the U.S</label>
            <input
              type="text"
              value={contact_person_name_in_the_U_S}
              onChange={(e) => {
                setContact_person_name_in_the_U_S(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Organization Name in the U.S</label>
            <input
              type="text"
              value={organization_name_in_the_U_S}
              onChange={(e) => {
                setOrganization_name_in_the_U_S(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Relationship To You</label>
            <input
              type="text"
              value={paying_persons_relationship_to_you2nd}
              onChange={(e) => {
                setPaying_persons_relationship_to_you2nd(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>U.S Contact Address</label>
            <input
              type="text"
              value={us_contact_address}
              onChange={(e) => {
                setUs_contact_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Phone Number</label>
            <input
              type="text"
              value={phone_number}
              onChange={(e) => {
                setPhone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Email Address</label>
            <input
              type="email"
              value={email_address2nd}
              onChange={(e) => {
                setEmail_address2nd(e.target.value);
              }}
            />
          </section>
        </section>

        <section className="user-input">
          <h1>Family Information</h1>

          <section className="user-input">
            <label>Father's Surnames</label>
            <input
              type="text"
              value={fathers_surnames}
              onChange={(e) => {
                setFathers_surnames(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Father's Given Names</label>
            <input
              type="text"
              value={fathers_given_names}
              onChange={(e) => {
                setFathers_given_names(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Father's Date of Birth</label>
            <input
              type="text"
              value={fathers_date_of_birth}
              onChange={(e) => {
                setFathers_date_of_birth(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Is your Father in the U.S?</label>
            <select
              name="Is your Father in the U.S?"
              value={is_your_father_in_the_U_S}
              onChange={(e) => {
                setIs_your_father_in_the_U_S(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </section>

          <section className="user-input">
            <label>Mother's Surnames</label>
            <input
              type="text"
              value={mothers_surnames}
              onChange={(e) => {
                setMothers_surnames(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Mother's Given Names</label>
            <input
              type="text"
              value={mothers_given_names}
              onChange={(e) => {
                setMothers_given_names(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Mother's Date of Birth</label>
            <input
              type="text"
              value={mothers_date_of_birth}
              onChange={(e) => {
                setMothers_date_of_birth(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Is your Mother in the U.S?</label>
            <select
              name="Is your Mother in the U.S?"
              value={is_your_mother_in_the_U_S}
              onChange={(e) => {
                setIs_your_mother_in_the_U_S(e.target.value);
              }}
            >
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </section>
        </section>

        <section className="user-input">
          <h1>Work/Education/Training Information</h1>

          <section className="user-input">
            <label>Primary Occupation</label>
            <input
              type="text"
              value={primary_occupation}
              onChange={(e) => {
                setPrimary_occupation(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Present Employer or School Name</label>
            <input
              type="text"
              value={present_employer_or_school_name}
              onChange={(e) => {
                setPresent_employer_or_school_name(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>City</label>
            <input
              type="text"
              value={city2nd}
              onChange={(e) => {
                setCity2nd(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Postal Zone/ZIP Code</label>
            <input
              type="text"
              value={postal_zone_ZIP_code2nd}
              onChange={(e) => {
                setPostal_zone_ZIP_code2nd(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Country/Region</label>
            <input
              type="text"
              value={country_region}
              onChange={(e) => {
                setCountry_region(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Work Phone Number</label>
            <input
              type="text"
              value={work_phone_number}
              onChange={(e) => {
                setWork_phone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Institution</label>
            <input
              type="text"
              value={name_of_institution}
              onChange={(e) => {
                setName_of_institution(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>City</label>
            <input
              type="text"
              value={city_of_institution}
              onChange={(e) => {
                setCity_of_institution(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Postal Zone/ZIP Code</label>
            <input
              type="text"
              value={postal_zone_ZIP_code_of_institution}
              onChange={(e) => {
                setPostal_zone_ZIP_code_of_institution(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Country/Region</label>
            <input
              type="text"
              value={country_region_of_institution}
              onChange={(e) => {
                setCountry_region_of_institution(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Course of Study</label>
            <input
              type="text"
              value={course_of_study}
              onChange={(e) => {
                setCourse_of_study(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Date of Attendance From</label>
            <input
              type="text"
              value={date_of_attendance_from}
              onChange={(e) => {
                setDate_of_attendance_from(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Date of Attendance To</label>
            <input
              type="text"
              value={date_of_attendance_to}
              onChange={(e) => {
                setDate_of_attendance_to(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Language Name 1</label>
            <input
              type="text"
              value={language_name_1}
              onChange={(e) => {
                setLanguage_name_1(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Language Name 2</label>
            <input
              type="text"
              value={language_name_2}
              onChange={(e) => {
                setLanguage_name_2(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Organization 1</label>
            <input
              type="text"
              value={name_of_organization_1}
              onChange={(e) => {
                setName_of_organization_1(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Organization 2</label>
            <input
              type="text"
              value={name_of_organization_2}
              onChange={(e) => {
                setName_of_organization_2(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Organization 3</label>
            <input
              type="text"
              value={name_of_organization_3}
              onChange={(e) => {
                setName_of_organization_3(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Organization 4</label>
            <input
              type="text"
              value={name_of_organization_4}
              onChange={(e) => {
                setName_of_organization_4(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of Organization 5</label>
            <input
              type="text"
              value={name_of_organization_5}
              onChange={(e) => {
                setName_of_organization_5(e.target.value);
              }}
            />
          </section>
        </section>

        <section className="user-input">
          <h1>Applicant/Exchange Visa Information</h1>
          <h1>Additional Point of Contact Information</h1>

          <section className="user-input">
            <label>Name 1</label>
            <input
              type="text"
              value={name_1}
              onChange={(e) => {
                setName_1(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Street Address</label>
            <input
              type="text"
              value={name1_street_address}
              onChange={(e) => {
                setName1_street_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>City</label>
            <input
              type="text"
              value={name1_city}
              onChange={(e) => {
                setName1_city(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Postal Zone/ZIP Code</label>
            <input
              type="text"
              value={name1_postal_zone_ZIP_code}
              onChange={(e) => {
                setName1_postal_zone_ZIP_code(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Country/Region</label>
            <input
              type="text"
              value={name1_country_region}
              onChange={(e) => {
                setName1_country_region(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Telephone Number</label>
            <input
              type="text"
              value={name1_telephone_number}
              onChange={(e) => {
                setName1_telephone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Email Address</label>
            <input
              type="email"
              value={name1_email_address}
              onChange={(e) => {
                setName1_email_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name 2</label>
            <input
              type="text"
              id="name_2"
              value={name_2}
              onChange={(e) => {
                setName_2(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Street Address</label>
            <input
              type="text"
              value={name2_street_address}
              onChange={(e) => {
                setName2_street_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>City</label>
            <input
              type="text"
              value={name2_city}
              onChange={(e) => {
                setName2_city(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Postal Zone/ZIP Code</label>
            <input
              type="text"
              value={name2_postal_zone_ZIP_code}
              onChange={(e) => {
                setName2_postal_zone_ZIP_code(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Country/Region</label>
            <input
              type="text"
              value={name2_country_region}
              onChange={(e) => {
                setName2_country_region(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Telephone Number</label>
            <input
              type="text"
              value={name2_telephone_number}
              onChange={(e) => {
                setName2_telephone_number(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Email Address</label>
            <input
              type="email"
              value={name2_email_address}
              onChange={(e) => {
                setName2_email_address(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>SEVIS ID</label>
            <input
              type="text"
              value={sevis_id}
              onChange={(e) => {
                setSevis_id(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Name of School</label>
            <input
              type="text"
              value={name_of_school}
              onChange={(e) => {
                setName_of_school(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Course of Study</label>
            <input
              type="text"
              value={course_of_study2nd}
              onChange={(e) => {
                setCourse_of_study2nd(e.target.value);
              }}
            />
          </section>

          <section className="user-input">
            <label>Street Address</label>
            <input
              type="text"
              value={street_address}
              onChange={(e) => {
                setStreet_address(e.target.value);
              }}
            />
          </section>
        </section>

        <section className="user-input">
          <button>Submit & Finish Form Fill-Up</button>
        </section>
      </form>
    </div>
  );
}
