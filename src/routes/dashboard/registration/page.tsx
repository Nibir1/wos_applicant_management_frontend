import { useState } from "react";
import axios from "axios";
import "./applicant-registration.css";

export default function RegistrationPage() {
  const [applicants_name, setApplicants_name] = useState("");
  const [fathers_name, setFathers_name] = useState("");
  const [mothers_name, setMothers_name] = useState("");
  const [applicants_Phone_Number, setApplicants_Phone_Number] = useState("");
  const [fathers_Phone_Number, setFathers_Phone_Number] = useState("");
  const [mothers_Phone_Number, setMothers_Phone_Number] = useState("");
  const [applicants_date_of_birth, setApplicants_date_of_birth] = useState("");
  const [fathers_date_of_birth, setFathers_date_of_birth] = useState("");
  const [mothers_date_of_birth, setMothers_date_of_birth] = useState("");
  const [admission_date, setAdmission_date] = useState("");
  const [applicants_personal_email, setApplicants_personal_email] =
    useState("");
  const [email_by_WOS_for_applicant, setEmail_by_WOS_for_applicant] =
    useState("");
  const [applicants_home_address, setApplicants_home_address] = useState("");
  const [applicants_messenger_link, setApplicants_messenger_link] =
    useState("");
  const [applicants_profession, setApplicants_profession] = useState("");
  const [visa_status, setVisa_status] = useState("");
  const [country_of_choice, setCountry_of_choice] = useState("");
  const [applicants_photo, setApplicants_photo] = useState<File | any>();
  const [passport, setPassport] = useState<File | any>();
  const [NID_Birth_Certificate, setNID_Birth_Certificate] = useState<
    File | any
  >();
  const [applicants_cv, setApplicants_cv] = useState<File | any>();
  const [recommendation_letter_1, setRecommendation_letter_1] = useState<
    File | any
  >();
  const [recommendation_letter_2, setRecommendation_letter_2] = useState<
    File | any
  >();
  const [SSc_transcript, setSSc_transcript] = useState<File | any>();
  const [SSc_certificate, setSSc_certificate] = useState<File | any>();
  const [HSc_transcript, setHSc_transcript] = useState<File | any>();
  const [HSc_certificate, setHSc_certificate] = useState<File | any>();
  const [BSc_transcript, setBSc_transcript] = useState<File | any>();
  const [BSc_certificate, setBSc_certificate] = useState<File | any>();
  const [MSc_transcript, setMSc_transcript] = useState<File | any>();
  const [MSc_certificate, setMSc_certificate] = useState<File | any>();
  const [english_certificate, setEnglish_certificate] = useState<File | any>();

  /** This function is responsible to take the applicants informations
   *  and store them into applicants table to create a new applicant
   */
  const addNewApplicant = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("applicants_name", applicants_name);
    formData.append("fathers_name", fathers_name);
    formData.append("mothers_name", mothers_name);
    formData.append("applicants_Phone_Number", applicants_Phone_Number);
    formData.append("fathers_Phone_Number", fathers_Phone_Number);
    formData.append("mothers_Phone_Number", mothers_Phone_Number);
    formData.append("applicants_date_of_birth", applicants_date_of_birth);
    formData.append("fathers_date_of_birth", fathers_date_of_birth);
    formData.append("mothers_date_of_birth", mothers_date_of_birth);
    formData.append("admission_date", admission_date);
    formData.append("applicants_personal_email", applicants_personal_email);
    formData.append("email_by_WOS_for_applicant", email_by_WOS_for_applicant);
    formData.append("applicants_home_address", applicants_home_address);
    formData.append("applicants_messenger_link", applicants_messenger_link);
    formData.append("applicants_profession", applicants_profession);
    formData.append("visa_status", visa_status);
    formData.append("country_of_choice", country_of_choice);
    formData.append("applicants_photo", applicants_photo);
    formData.append("passport", passport);
    formData.append("NID_Birth_Certificate", NID_Birth_Certificate);
    formData.append("applicants_cv", applicants_cv);
    formData.append("recommendation_letter_1", recommendation_letter_1);
    formData.append("recommendation_letter_2", recommendation_letter_2);
    formData.append("SSc_transcript", SSc_transcript);
    formData.append("SSc_certificate", SSc_certificate);
    formData.append("HSc_transcript", HSc_transcript);
    formData.append("HSc_certificate", HSc_certificate);
    formData.append("BSc_transcript", BSc_transcript);
    formData.append("BSc_certificate", BSc_certificate);
    formData.append("MSc_transcript", MSc_transcript);
    formData.append("MSc_certificate", MSc_certificate);
    formData.append("english_certificate", english_certificate);

    axios
      .post(
        "https://wosambackend-production.up.railway.app/insert_applicant_infos",
        formData
      )
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
      <form
        className="applicant-registration-container"
        onSubmit={addNewApplicant}
      >
        <section className="label-input">
          <label>Applicant's Name</label>
          <input
            type="text"
            value={applicants_name}
            onChange={(e) => setApplicants_name(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Father's Name</label>
          <input
            type="text"
            value={fathers_name}
            onChange={(e) => setFathers_name(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Mother's Name</label>
          <input
            type="text"
            value={mothers_name}
            onChange={(e) => setMothers_name(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Phone Number</label>
          <input
            type="text"
            value={applicants_Phone_Number}
            onChange={(e) => setApplicants_Phone_Number(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Father's Phone Number</label>
          <input
            type="text"
            value={fathers_Phone_Number}
            onChange={(e) => setFathers_Phone_Number(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Mother's Phone Number</label>
          <input
            type="text"
            value={mothers_Phone_Number}
            onChange={(e) => setMothers_Phone_Number(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Date of Birth</label>
          <input
            type="text"
            value={applicants_date_of_birth}
            onChange={(e) => setApplicants_date_of_birth(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Father's Date of Birth</label>
          <input
            type="text"
            value={fathers_date_of_birth}
            onChange={(e) => setFathers_date_of_birth(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Mother's Date of Birth</label>
          <input
            type="text"
            value={mothers_date_of_birth}
            onChange={(e) => setMothers_date_of_birth(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Admission Date</label>
          <input
            type="text"
            value={admission_date}
            onChange={(e) => setAdmission_date(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Personal Email</label>
          <input
            type="text"
            value={applicants_personal_email}
            required
            onChange={(e) => setApplicants_personal_email(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Email by WOS for Applicant</label>
          <input
            type="text"
            value={email_by_WOS_for_applicant}
            onChange={(e) => setEmail_by_WOS_for_applicant(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Home Address</label>
          <input
            type="text"
            value={applicants_home_address}
            onChange={(e) => setApplicants_home_address(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Messenger Link</label>
          <input
            type="text"
            value={applicants_messenger_link}
            onChange={(e) => setApplicants_messenger_link(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Applicant's Profession</label>
          <input
            type="text"
            value={applicants_profession}
            onChange={(e) => setApplicants_profession(e.target.value)}
          />
        </section>

        <section className="label-input">
          <label>Visa Status</label>
          <select
            name="visa_status"
            value={visa_status}
            onChange={(e) => setVisa_status(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="First Shot">First Shot</option>
            <option value="Second Shot">Second Shot</option>
          </select>
        </section>

        <section className="label-input">
          <label>Country of Choice</label>
          <input
            type="text"
            id="country_of_choice"
            value={country_of_choice}
            onChange={(e) => setCountry_of_choice(e.target.value)}
          />
        </section>

        <section className="file-input">
          <label>Applicant's Photo</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setApplicants_photo(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>Passport</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setPassport(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>NID / Birth Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setNID_Birth_Certificate(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>Applicant's CV</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setApplicants_cv(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>Recommendation Letter 1</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setRecommendation_letter_1(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>Recommendation Letter 2</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setRecommendation_letter_2(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>SSc Transcript</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setSSc_transcript(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>SSc Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setSSc_certificate(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>HSc Transcript</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setHSc_transcript(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>HSc Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setHSc_certificate(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>BSc Transcript</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setBSc_transcript(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>BSc Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setBSc_certificate(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>MSc Transcript</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setMSc_transcript(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>MSc Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setMSc_certificate(selectedFile);
              }
            }}
          />
        </section>

        <section className="file-input">
          <label>English Certificate</label>
          <input
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const selectedFile = files[0];
                setEnglish_certificate(selectedFile);
              }
            }}
          />
        </section>

        <button
          className="register-applicant"
          style={{ backgroundColor: "#8F5942" }}
        >
          Register Applicant
        </button>
      </form>
    </div>
  );
}
