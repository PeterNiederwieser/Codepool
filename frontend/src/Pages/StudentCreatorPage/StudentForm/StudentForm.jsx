import React, { useState, useEffect } from "react";
import "./StudentForm.css";
import StudentFormProgressBar from "../../../Components/StudentFormProgressBar";
import StudentFormIntro from "../../../Components/StudentFormIntro";
import StudentFormImageUpload from "../../../Components/StudentFormImageUpload";
import StudentFormData from "../../../Components/StudentFormData";
import StudentFormTechStack from "../../../Components/StudentFormTechStack.jsx";

const StudentForm = ({ onSubmit, onCancel, disabled }) => {
  const initFormObject = () => {
    return {
      firstName: "",
      lastName: "",
      age: "",
      eMail: "",
      description: "",
      project: "",
      image: "",
      techStack: []
    };
  };

  const [formObject, setFormObject] = useState(initFormObject());
  const [uploadedImage, setUploadedImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const formSteps = ["Intro", "ImageUpload", "Data", "Tech-Stack"];

  const increaseCurrentStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const decreaseCurrentStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const updateFormObject = (key, value) => {
    setFormObject((prevObject) => {
      return {
        ...prevObject,
        [key]: value,
      };
    });
  };

  const onFileUpload = async (event) => {
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    updateFormObject(event.target.name, base64);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const renderFormPart = () => {
    switch (currentStep) {
      case 0:
        return <StudentFormIntro next={increaseCurrentStep} />;
      case 1:
        return (
          <StudentFormImageUpload
            previous={decreaseCurrentStep}
            next={increaseCurrentStep}
            uploadedImage={uploadedImage}
            onFileUpload={onFileUpload}
          />
        );
      case 2:
        return (
          <StudentFormData
            previous={decreaseCurrentStep}
            next={increaseCurrentStep}
            uploadedImage={uploadedImage}
            onFileUpload={onFileUpload}
            formObject={formObject}
            updateFormObject={updateFormObject}
          />
        );
      case 3:
        return ( 
          <StudentFormTechStack 
              previous={decreaseCurrentStep} 
              formObject={formObject}
              setFormObject={setFormObject}
          />
        );
    }
  };

  return (
    <div className="component">
      <div className="container">
        <div className="title"> Create your own profile </div>
        <StudentFormProgressBar
          formSteps={formSteps}
          currentStep={currentStep}
        />
        <div className="form-container">
          {renderFormPart()}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;