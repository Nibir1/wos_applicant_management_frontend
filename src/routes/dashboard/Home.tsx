import { useState, useRef } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

// These are related to pdf viewing
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// -------------------------------------------------------------------

export default function HomePage() {
  // These are basically taking to sections based on button click
  const updateApplicantInfos_section = useRef<HTMLDivElement>(null);
  const scrollToupdateApplicantInfos_section = () => {
    if (updateApplicantInfos_section.current !== null) {
      updateApplicantInfos_section.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const ds160Informations_section = useRef<HTMLDivElement>(null);
  const scrollTods160Informations_section = () => {
    if (ds160Informations_section.current !== null) {
      ds160Informations_section.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const goToTop_section = useRef<HTMLDivElement>(null);
  const scrollTogoToTop_section = () => {
    if (goToTop_section.current !== null) {
      goToTop_section.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const [applicant_email, setApplicant_email] = useState("");

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
  const [email_by_WOS_for_applicant, setEmail_by_WOS_for_applicant] =
    useState("");
  const [applicants_home_address, setApplicants_home_address] = useState("");
  const [applicants_messenger_link, setApplicants_messenger_link] =
    useState("");
  const [applicants_profession, setApplicants_profession] = useState("");
  const [paid_i20_amount, setPaid_i20_amount] = useState("");
  const [paid_sevis_amount, setPaid_sevis_amount] = useState("");
  const [paid_after_visa_amount, setPaid_after_visa_amount] = useState("");
  const [i20_payment_status, seti20_payment_status] = useState("");
  const [sevis_payment_status, setSevis_payment_status] = useState("");
  const [after_visa_payment_status, setAfter_visa_payment_status] =
    useState("");
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

  const [waitingMessage, setWaitingMessage] = useState("");

  // This code can fetch specific applicant's informations from database and show where we want
  const [message, setMessage] = useState("");
  const [data, setData] = useState<any>("initial state");
  const [ds160Data, setds160Data] = useState<any>("initial state");

  const viewApplicantInformation = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    axios
      .get(
        `https://wosambackend-production.up.railway.app/get_specific_applicant_infos/${applicant_email}`
      )
      .then((response) => {
        console.log({ response: response });
        if (applicant_email === response.data[0].applicants_personal_email) {
          setData(response.data[0]);
        } else {
          console.log(`User Not Found`);
        }
      })
      .catch(() => setMessage(`Applicant Not Found`));

    // This is to get the ds160 informations
    axios
      .get(
        `https://wosambackend-production.up.railway.app/get_ds160_infos/${applicant_email}`
      )
      .then((response) => {
        console.log({ response: response });
        if (
          applicant_email === response.data[0].applicants_personal_email_address
        ) {
          setds160Data(response.data[0]);
        } else {
          console.log(`User Not Found`);
        }
      })
      .catch(() => console.log("DS160 Infos Not Filled Yet"));
  };

  // This function can download images to your hard-drive
  const handleDownload = (imageUrl: RequestInfo | URL) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "applicant_image.jpg"));
  };

  /**
   * This code can showpdf on button click.
   * Taking the data and storing into setViewPdf and this function can be called on button click
   */
  const [viewPdf, setViewPdf] = useState([]);
  const newPlugin = defaultLayoutPlugin({
    sidebarTabs: () => [], // Responsible for removing the sidebar of the react-pdf-viewer.dev
  });

  const showPassport = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.passport);
  };

  const showNID_Birth_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.nid_birth_certificate);
  };

  const showApplicants_cv = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.applicants_cv);
  };

  const showRecommendation_Letter_1 = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.recommendation_letter_1);
  };

  const showRecommendation_Letter_2 = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.recommendation_letter_2);
  };

  const showSSc_Transcript = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.ssc_transcript);
  };

  const showSSc_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.ssc_certificate);
  };

  const showHSc_Transcript = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.hsc_transcript);
  };

  const showHSc_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.hsc_certificate);
  };

  const showBSc_Transcript = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.bsc_transcript);
  };

  const showBSc_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.bsc_certificate);
  };

  const showMSc_Transcript = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.msc_transcript);
  };

  const showMSc_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.msc_certificate);
  };

  const showEnglish_Certificate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setViewPdf(data.english_certificate);
  };

  /** This function is responsible to take the applicants informations
   *  and store them into applicants table to create a new applicant
   */
  const updateApplicantInfos = async (e: { preventDefault: () => void }) => {
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
    formData.append("email_by_WOS_for_applicant", email_by_WOS_for_applicant);
    formData.append("applicants_home_address", applicants_home_address);
    formData.append("applicants_messenger_link", applicants_messenger_link);
    formData.append("applicants_profession", applicants_profession);
    formData.append("paid_i20_amount", paid_i20_amount);
    formData.append("paid_sevis_amount", paid_sevis_amount);
    formData.append("paid_after_visa_amount", paid_after_visa_amount);
    formData.append("i20_payment_status", i20_payment_status);
    formData.append("sevis_payment_status", sevis_payment_status);
    formData.append("after_visa_payment_status", after_visa_payment_status);
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
      .put(
        `https://wosambackend-production.up.railway.app/update_applicant_infos/${applicant_email}`,
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

    setWaitingMessage(`-Updating Files.Please Wait-`);

    setTimeout(() => {
      // code to execute after 3 seconds
      window.location.reload();
    }, 50000);
  };

  // This code deletes an applicant from applicants and also deletes his ds160 informations
  const deleteApplicant = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    axios
      .delete(
        `https://wosambackend-production.up.railway.app/delete_applicant_from_applicants/${applicant_email}`
      )
      .then((response) => {
        if (response.data.Status === "Success") {
          console.log("Succeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => console.log(error));

    axios
      .delete(
        `https://wosambackend-production.up.railway.app/delete_applicants_ds160_informations/${applicant_email}`
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
      {/* Search By Email htmls */}
      <section className="search-applicant" ref={goToTop_section}>
        <form onSubmit={viewApplicantInformation}>
          <label style={{ textAlign: "center", color: "brown" }}>
            {message}
          </label>
          <input
            type="email"
            required
            className="search"
            placeholder="Applicant's Email To View Informations"
            value={applicant_email}
            onChange={(e) => setApplicant_email(e.target.value)}
          />
          <button>View</button>
        </form>

        <button
          className="register-applicant"
          style={{ backgroundColor: "brown", margin: "11px" }}
          onClick={deleteApplicant}
        >
          Delete Profile
        </button>
      </section>

      {/* This section views applicants datas based on the email */}
      <section className="applicant-registration-container">
        <section className="file-input">
          <h1 style={{ textAlign: "center" }}>Applican'ts Photo</h1>
          <img
            src={
              `https://wosambackend-production.up.railway.app/images/` +
              data.applicants_photo
            }
            style={{ width: "200px", height: "200px" }}
          />
          <button
            className="register-applicant"
            style={{ backgroundColor: "#484b4f" }}
            onClick={() =>
              handleDownload(
                `https://wosambackend-production.up.railway.app/images/` +
                  data.applicants_photo
              )
            }
          >
            Download Photo
          </button>
        </section>

        <section>
          <a
            href={data.applicants_messenger_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="register-applicant"
              style={{ backgroundColor: "#484b4f" }}
            >
              Chat With Applicant
            </button>
          </a>
        </section>

        <button
          className="register-applicant"
          style={{ backgroundColor: "#484b4f" }}
          onClick={scrollToupdateApplicantInfos_section}
        >
          Update Informations
        </button>

        <button
          className="register-applicant"
          style={{ backgroundColor: "#484b4f" }}
          onClick={scrollTods160Informations_section}
        >
          DS160 Informations
        </button>

        <section className="label-input">
          <label>Applicant's Name</label>
          <input type="text" value={data.applicants_name} />
        </section>

        <section className="label-input">
          <label>Father's Name</label>
          <input type="text" value={data.fathers_name} />
        </section>

        <section className="label-input">
          <label>Mother's Name</label>
          <input type="text" value={data.mothers_name} />
        </section>

        <section className="label-input">
          <label>Applicant's Phone Number</label>
          <input type="text" value={data.applicants_phone_number} />
        </section>

        <section className="label-input">
          <label>Father's Phone Number</label>
          <input type="text" value={data.fathers_phone_number} />
        </section>

        <section className="label-input">
          <label>Mother's Phone Number</label>
          <input type="text" value={data.mothers_phone_number} />
        </section>

        <section className="label-input">
          <label>Applicant's Date of Birth</label>
          <input type="text" value={data.applicants_date_of_birth} />
        </section>

        <section className="label-input">
          <label>Father's Date of Birth</label>
          <input type="text" value={data.fathers_date_of_birth} />
        </section>

        <section className="label-input">
          <label>Mother's Date of Birth</label>
          <input type="text" value={data.mothers_date_of_birth} />
        </section>

        <section className="label-input">
          <label>Admission Date</label>
          <input type="text" value={data.admission_date} />
        </section>

        <section className="label-input">
          <label>Applicant's Personal Email</label>
          <input type="text" value={data.applicants_personal_email} />
        </section>

        <section className="label-input">
          <label>Email by WOS for Applicant</label>
          <input type="text" value={data.email_by_wos_for_applicant} />
        </section>

        <section className="label-input">
          <label>Applicant's Home Address</label>
          <input type="text" value={data.applicants_home_address} />
        </section>

        <section className="label-input">
          <label>Applicant's Profession</label>
          <input type="text" value={data.applicants_profession} />
        </section>

        <section className="label-input">
          <label>Paid I20 Amount</label>
          <input type="text" value={data.paid_i20_amount} />
        </section>

        <section className="label-input">
          <label>Paid SEVIS Amount</label>
          <input type="text" value={data.paid_sevis_amount} />
        </section>

        <section className="label-input">
          <label>Paid After VISA Amount</label>
          <input type="text" value={data.paid_after_visa_amount} />
        </section>

        <section className="label-input">
          <label>I20 Payment Status</label>
          <input type="text" value={data.i20_payment_status} />
        </section>

        <section className="label-input">
          <label>SEVIS Payment Status</label>
          <input type="text" value={data.sevis_payment_status} />
        </section>

        <section className="label-input">
          <label>After VISA Payment Status</label>
          <input type="text" value={data.after_visa_payment_status} />
        </section>

        <section className="label-input">
          <label>Visa Status</label>
          <input type="text" value={data.visa_status} />
        </section>

        <section className="label-input">
          <label>Country of Choice</label>
          <input type="text" value={data.country_of_choice} />
        </section>

        <section className="file-input">
          <label>Passport</label>
          <button onClick={showPassport}>View File</button>
        </section>

        <section className="file-input">
          <label>NID/Birth Certificate</label>
          <button onClick={showNID_Birth_Certificate}>View File</button>
        </section>

        <section className="file-input">
          <label>Applicant's CV</label>
          <button onClick={showApplicants_cv}>View File</button>
        </section>

        <section className="file-input">
          <label>Recommendation Letter 1</label>
          <button onClick={showRecommendation_Letter_1}>View File</button>
        </section>

        <section className="file-input">
          <label>Recommendation Letter 2</label>
          <button onClick={showRecommendation_Letter_2}>View File</button>
        </section>

        <section className="file-input">
          <label>SSc Transcript</label>
          <button onClick={showSSc_Transcript}>View File</button>
        </section>

        <section className="file-input">
          <label>SSc Certificate</label>
          <button onClick={showSSc_Certificate}>View File</button>
        </section>

        <section className="file-input">
          <label>HSc Transcript</label>
          <button onClick={showHSc_Transcript}>View File</button>
        </section>

        <section className="file-input">
          <label>HSc Certificate</label>
          <button onClick={showHSc_Certificate}>View File</button>
        </section>

        <section className="file-input">
          <label>BSc Transcript</label>
          <button onClick={showBSc_Transcript}>View File</button>
        </section>

        <section className="file-input">
          <label>BSc Certificate</label>
          <button onClick={showBSc_Certificate}>View File</button>
        </section>

        <section className="file-input">
          <label>MSc Transcript</label>
          <button onClick={showMSc_Transcript}>View File</button>
        </section>

        <section className="file-input">
          <label>MSc Certificate</label>
          <button onClick={showMSc_Certificate}>View File</button>
        </section>

        <section className="file-input">
          <label>English Certificate</label>
          <button onClick={showEnglish_Certificate}>View File</button>
        </section>
      </section>

      <br />
      <br />
      <br />
      {/* This piece of code views pdf file */}
      <div className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
          {viewPdf && (
            <>
              <Viewer
                fileUrl={
                  `https://wosambackend-production.up.railway.app/images/` +
                  viewPdf
                }
                plugins={[newPlugin]}
              />
            </>
          )}
          {!viewPdf && <>No PDF</>}
        </Worker>
      </div>
      <br />
      <br />
      <br />

      {/* This section is responsible to update Appplicants Informations */}
      <section ref={updateApplicantInfos_section}>
        <h1 className="headline">Update Applicant's Informations</h1>
        <form
          className="applicant-registration-container"
          onSubmit={updateApplicantInfos}
        >
          <section className="label-input">
            <label>Applicant's Name</label>
            <input
              type="text"
              required
              value={applicants_name}
              onChange={(e) => setApplicants_name(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Father's Name</label>
            <input
              type="text"
              required
              value={fathers_name}
              onChange={(e) => setFathers_name(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Mother's Name</label>
            <input
              type="text"
              required
              value={mothers_name}
              onChange={(e) => setMothers_name(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Applicant's Phone Number</label>
            <input
              type="text"
              required
              value={applicants_Phone_Number}
              onChange={(e) => setApplicants_Phone_Number(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Father's Phone Number</label>
            <input
              type="text"
              required
              value={fathers_Phone_Number}
              onChange={(e) => setFathers_Phone_Number(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Mother's Phone Number</label>
            <input
              type="text"
              required
              value={mothers_Phone_Number}
              onChange={(e) => setMothers_Phone_Number(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Applicant's Date of Birth</label>
            <input
              type="text"
              required
              value={applicants_date_of_birth}
              onChange={(e) => setApplicants_date_of_birth(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Father's Date of Birth</label>
            <input
              type="text"
              required
              value={fathers_date_of_birth}
              onChange={(e) => setFathers_date_of_birth(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Mother's Date of Birth</label>
            <input
              type="text"
              required
              value={mothers_date_of_birth}
              onChange={(e) => setMothers_date_of_birth(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Admission Date</label>
            <input
              type="text"
              required
              value={admission_date}
              onChange={(e) => setAdmission_date(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Email by WOS for Applicant</label>
            <input
              type="text"
              required
              value={email_by_WOS_for_applicant}
              onChange={(e) => setEmail_by_WOS_for_applicant(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Applicant's Home Address</label>
            <input
              type="text"
              required
              value={applicants_home_address}
              onChange={(e) => setApplicants_home_address(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Applicant's Messenger Link</label>
            <input
              type="text"
              required
              value={applicants_messenger_link}
              onChange={(e) => setApplicants_messenger_link(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Applicant's Profession</label>
            <input
              type="text"
              required
              value={applicants_profession}
              onChange={(e) => setApplicants_profession(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Paid I20 Amount</label>
            <input
              type="text"
              required
              value={paid_i20_amount}
              onChange={(e) => setPaid_i20_amount(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Paid SEVIS Amount</label>
            <input
              type="text"
              required
              value={paid_sevis_amount}
              onChange={(e) => setPaid_sevis_amount(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>Paid After VISA Amount</label>
            <input
              type="text"
              required
              value={paid_after_visa_amount}
              onChange={(e) => setPaid_after_visa_amount(e.target.value)}
            />
          </section>

          <section className="label-input">
            <label>I20 Payment Status</label>
            <select
              name="I20 Payment Status"
              required
              value={i20_payment_status}
              onChange={(e) => seti20_payment_status(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
          </section>

          <section className="label-input">
            <label>SEVIS Payment Status</label>
            <select
              name="SEVIS Payment Status"
              required
              value={sevis_payment_status}
              onChange={(e) => setSevis_payment_status(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
          </section>

          <section className="label-input">
            <label>After VISA Payment Status</label>
            <select
              name="After VISA Payment Status"
              required
              value={after_visa_payment_status}
              onChange={(e) => setAfter_visa_payment_status(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
          </section>

          <section className="label-input">
            <label>Visa Status</label>
            <select
              name="visa_status"
              required
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
              required
              value={country_of_choice}
              onChange={(e) => setCountry_of_choice(e.target.value)}
            />
          </section>

          <section className="file-input">
            <label>Applicant's Photo</label>
            <input
              type="file"
              required
              // onChange={(e) => setApplicants_photo(e.target.files[0])}
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
            Update Applicant
          </button>

          <section className="file-input">
            <label
              style={{
                color: "brown",
                fontSize: "25px",
                width: "350px",
                margin: "25px",
              }}
            >
              {waitingMessage}
            </label>
          </section>
        </form>
      </section>

      {/* This section is responsible to view DS160 Informations */}
      <section ref={ds160Informations_section}>
        <h1 className="headline">DS160 Informations</h1>
        <form className="form-fillup-container">
          <section className="user-input">
            <h1>
              Personal, Address, Phone, and Passport/Travel Document Information
            </h1>

            <section className="user-input">
              <label>Name Provided</label>
              <input type="text" value={ds160Data.name_provided} />
            </section>

            <section className="user-input">
              <label>Sex</label>
              <input type="text" value={ds160Data.sex} />
            </section>

            <section className="user-input">
              <label>Marital Status</label>
              <input type="text" value={ds160Data.marital_status} />
            </section>

            <section className="label-input">
              <label>Applicant's Date of Birth</label>
              <input type="text" value={ds160Data.applicants_date_of_birth} />
            </section>

            <section className="user-input">
              <label>Place of Birth</label>
              <input type="text" value={ds160Data.place_of_birth} />
            </section>

            <section className="user-input">
              <label>National Identification Number</label>
              <input
                type="text"
                value={ds160Data.national_identification_number}
              />
            </section>

            <section className="user-input">
              <label>Home Address</label>
              <input type="text" value={ds160Data.home_address} />
            </section>

            <section className="user-input">
              <label>City</label>
              <input type="text" value={ds160Data.city} />
            </section>

            <section className="user-input">
              <label>Postal Zone/ZIP Code</label>
              <input type="text" value={ds160Data.postal_zone_ZIP_code} />
            </section>

            <section className="user-input">
              <label>Same Mailing Address</label>
              <input type="text" value={ds160Data.same_mailing_address} />
            </section>

            <section className="user-input">
              <label>Primary Phone Number</label>
              <input type="text" value={ds160Data.primary_phone_number} />
            </section>

            <section className="user-input">
              <label>Secondary Phone Number</label>
              <input type="text" value={ds160Data.secondary_phone_number} />
            </section>

            <section className="user-input">
              <label>Email Address</label>
              <input type="email" value={ds160Data.email_address} />
            </section>

            <section className="user-input">
              <label>Additional Email Address</label>
              <input type="email" value={ds160Data.additional_email_address} />
            </section>

            <section className="user-input">
              <label>Social Media Platform</label>
              <input type="text" value={ds160Data.social_media_platform} />
            </section>
            <section className="user-input">
              <label>Social Media Identifier</label>
              <input type="text" value={ds160Data.social_media_identifier} />
            </section>

            <section className="user-input">
              <label>Passport/Travel Document Type</label>
              <input
                type="text"
                value={ds160Data.passport_travel_document_type}
              />
            </section>

            <section className="user-input">
              <label>Passport/Travel Document Number</label>
              <input
                type="text"
                value={ds160Data.passport_travel_document_number}
              />
            </section>

            <section className="user-input">
              <label>Passport Issuance Date</label>
              <input type="text" value={ds160Data.passport_issuance_date} />
            </section>

            <section className="user-input">
              <label>Passport Expiration Date</label>
              <input type="text" value={ds160Data.passport_expiration_date} />
            </section>
          </section>

          <section className="user-input">
            <h1>Travel Information</h1>

            <section className="user-input">
              <label>Purpose of Trip to the U.S</label>
              <input type="text" value={ds160Data.purpose_of_trip_to_the_U_S} />
            </section>

            <section className="user-input">
              <label>Intended Date of Arrival</label>
              <input type="text" value={ds160Data.intended_date_of_arrival} />
            </section>

            <section className="user-input">
              <label>Intended Length of Stay in U.S</label>
              <input
                type="text"
                value={ds160Data.intended_length_of_stay_in_U_S}
              />
            </section>

            <section className="user-input">
              <label>Address where you will stay in the U.S</label>
              <input
                type="text"
                value={ds160Data.address_where_you_will_stay_in_the_U_S}
              />
            </section>

            <section className="user-input">
              <label>Person Paying for Your Trip</label>
              <input
                type="text"
                value={ds160Data.person_paying_for_your_trip}
              />
            </section>

            <section className="user-input">
              <label>Telephone Number</label>
              <input
                type="text"
                value={ds160Data.paying_persons_telephone_number}
              />
            </section>

            <section className="user-input">
              <label>Email Address</label>
              <input
                type="email"
                value={ds160Data.paying_persons_email_address}
              />
            </section>

            <section className="user-input">
              <label>Relationship To You</label>
              <input
                type="text"
                value={ds160Data.paying_persons_relationship_to_you}
              />
            </section>
          </section>

          <section className="user-input">
            <h1>U.S Contact Information</h1>

            <section className="user-input">
              <label>Contact Person Name in the U.S</label>
              <input
                type="text"
                value={ds160Data.contact_person_name_in_the_U_S}
              />
            </section>

            <section className="user-input">
              <label>Organization Name in the U.S</label>
              <input
                type="text"
                value={ds160Data.organization_name_in_the_U_S}
              />
            </section>

            <section className="user-input">
              <label>Relationship To You</label>
              <input
                type="text"
                value={ds160Data.paying_persons_relationship_to_you2nd}
              />
            </section>

            <section className="user-input">
              <label>U.S Contact Address</label>
              <input type="text" value={ds160Data.us_contact_address} />
            </section>

            <section className="user-input">
              <label>Phone Number</label>
              <input type="text" value={ds160Data.phone_number} />
            </section>

            <section className="user-input">
              <label>Email Address</label>
              <input type="email" value={ds160Data.email_address2nd} />
            </section>
          </section>

          <section className="user-input">
            <h1>Family Information</h1>

            <section className="user-input">
              <label>Father's Surnames</label>
              <input type="text" value={ds160Data.fathers_surnames} />
            </section>

            <section className="user-input">
              <label>Father's Given Names</label>
              <input type="text" value={ds160Data.fathers_given_names} />
            </section>

            <section className="user-input">
              <label>Father's Date of Birth</label>
              <input type="text" value={ds160Data.fathers_date_of_birth} />
            </section>

            <section className="user-input">
              <label>Is your Father in the U.S?</label>
              <input type="text" value={ds160Data.is_your_father_in_the_U_S} />
            </section>

            <section className="user-input">
              <label>Mother's Surnames</label>
              <input type="text" value={ds160Data.mothers_surnames} />
            </section>

            <section className="user-input">
              <label>Mother's Given Names</label>
              <input type="text" value={ds160Data.mothers_given_names} />
            </section>

            <section className="user-input">
              <label>Mother's Date of Birth</label>
              <input type="text" value={ds160Data.mothers_date_of_birth} />
            </section>

            <section className="user-input">
              <label>Is your Mother in the U.S?</label>
              <input type="text" value={ds160Data.is_your_mother_in_the_U_S} />
            </section>
          </section>

          <section className="user-input">
            <h1>Work/Education/Training Information</h1>

            <section className="user-input">
              <label>Primary Occupation</label>
              <input type="text" value={ds160Data.primary_occupation} />
            </section>

            <section className="user-input">
              <label>Present Employer or School Name</label>
              <input
                type="text"
                value={ds160Data.present_employer_or_school_name}
              />
            </section>

            <section className="user-input">
              <label>Address</label>
              <input type="text" value={ds160Data.address} />
            </section>

            <section className="user-input">
              <label>City</label>
              <input type="text" value={ds160Data.city2nd} />
            </section>

            <section className="user-input">
              <label>Postal Zone/ZIP Code</label>
              <input type="text" value={ds160Data.postal_zone_ZIP_code2nd} />
            </section>

            <section className="user-input">
              <label>Country/Region</label>
              <input type="text" value={ds160Data.country_region} />
            </section>

            <section className="user-input">
              <label>Work Phone Number</label>
              <input type="text" value={ds160Data.work_phone_number} />
            </section>

            <section className="user-input">
              <label>Name of Institution</label>
              <input type="text" value={ds160Data.name_of_institution} />
            </section>

            <section className="user-input">
              <label>City</label>
              <input type="text" value={ds160Data.city_of_institution} />
            </section>

            <section className="user-input">
              <label>Postal Zone/ZIP Code</label>
              <input
                type="text"
                value={ds160Data.postal_zone_ZIP_code_of_institution}
              />
            </section>

            <section className="user-input">
              <label>Country/Region</label>
              <input
                type="text"
                value={ds160Data.country_region_of_institution}
              />
            </section>

            <section className="user-input">
              <label>Course of Study</label>
              <input type="text" value={ds160Data.course_of_study} />
            </section>

            <section className="user-input">
              <label>Date of Attendance From</label>
              <input type="text" value={ds160Data.date_of_attendance_from} />
            </section>

            <section className="user-input">
              <label>Date of Attendance To</label>
              <input type="text" value={ds160Data.date_of_attendance_to} />
            </section>

            <section className="user-input">
              <label>Language Name 1</label>
              <input type="text" value={ds160Data.language_name_1} />
            </section>

            <section className="user-input">
              <label>Language Name 2</label>
              <input type="text" value={ds160Data.language_name_2} />
            </section>

            <section className="user-input">
              <label>Name of Organization 1</label>
              <input type="text" value={ds160Data.name_of_organization_1} />
            </section>

            <section className="user-input">
              <label>Name of Organization 2</label>
              <input type="text" value={ds160Data.name_of_organization_2} />
            </section>

            <section className="user-input">
              <label>Name of Organization 3</label>
              <input type="text" value={ds160Data.name_of_organization_3} />
            </section>

            <section className="user-input">
              <label>Name of Organization 4</label>
              <input type="text" value={ds160Data.name_of_organization_4} />
            </section>

            <section className="user-input">
              <label>Name of Organization 5</label>
              <input type="text" value={ds160Data.name_of_organization_5} />
            </section>
          </section>

          <section className="user-input">
            <h1>Applicant/Exchange Visa Information</h1>
            <h1>Additional Point of Contact Information</h1>

            <section className="user-input">
              <label>Name 1</label>
              <input type="text" value={ds160Data.name_1} />
            </section>

            <section className="user-input">
              <label>Street Address</label>
              <input type="text" value={ds160Data.name1_street_address} />
            </section>

            <section className="user-input">
              <label>City</label>
              <input type="text" value={ds160Data.name1_city} />
            </section>

            <section className="user-input">
              <label>Postal Zone/ZIP Code</label>
              <input type="text" value={ds160Data.name1_postal_zone_ZIP_code} />
            </section>

            <section className="user-input">
              <label>Country/Region</label>
              <input type="text" value={ds160Data.name1_country_region} />
            </section>

            <section className="user-input">
              <label>Telephone Number</label>
              <input type="text" value={ds160Data.name1_telephone_number} />
            </section>

            <section className="user-input">
              <label>Email Address</label>
              <input type="email" value={ds160Data.name1_email_address} />
            </section>

            <section className="user-input">
              <label>Name 2</label>
              <input type="text" value={ds160Data.name_2} />
            </section>

            <section className="user-input">
              <label>Street Address</label>
              <input type="text" value={ds160Data.name2_street_address} />
            </section>

            <section className="user-input">
              <label>City</label>
              <input type="text" value={ds160Data.name2_city} />
            </section>

            <section className="user-input">
              <label>Postal Zone/ZIP Code</label>
              <input type="text" value={ds160Data.name2_postal_zone_ZIP_code} />
            </section>

            <section className="user-input">
              <label>Country/Region</label>
              <input type="text" value={ds160Data.name2_country_region} />
            </section>

            <section className="user-input">
              <label>Telephone Number</label>
              <input type="text" value={ds160Data.name2_telephone_number} />
            </section>

            <section className="user-input">
              <label>Email Address</label>
              <input type="email" value={ds160Data.name2_email_address} />
            </section>

            <section className="user-input">
              <label>SEVIS ID</label>
              <input type="text" value={ds160Data.sevis_id} />
            </section>

            <section className="user-input">
              <label>Name of School</label>
              <input type="text" value={ds160Data.name_of_school} />
            </section>

            <section className="user-input">
              <label>Course of Study</label>
              <input type="text" value={ds160Data.course_of_study2nd} />
            </section>

            <section className="user-input">
              <label>Street Address</label>
              <input type="text" value={ds160Data.street_address} />
            </section>
          </section>
        </form>
        <section className="search-applicant">
          <button onClick={scrollTogoToTop_section}>Go To Top</button>
        </section>
      </section>
    </div>
  );
}
