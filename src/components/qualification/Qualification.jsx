import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
  const[toggleSetate, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
    <section className='qualification section'>
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={
            toggleSetate === 1 
          ? "qualification_button qualification_active button--flex" 
          : "qualification_button button--flex" }
          onClick={() => toggleTab(1)}>

            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}Education
          </div>

          <div className={
            toggleSetate === 2 
            ? "qualification_button qualification_active button--flex" 
            : "qualification_button button--flex" }
            onClick={() => toggleTab(2)}>

            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className={
            toggleSetate === 1 
            ? "qualification_content qualification_content-active" 
            : "qualification_content"
            }
            onClick={() => toggleTab(1)}
            >
            
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2020 - 2021
                </div>
              </div>

            </div>

            <div className="qualification_data">

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

              <div>
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2017 - 2018
                </div>
              </div>

            </div>
          </div>

          <div className={
            toggleSetate === 2 
            ? "qualification_content qualification_content-active" 
            : "qualification_content"
            }>
            
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Product Designer</h3>
                <span className="qualification_subtitle">Sky Age Pune</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

              <div>
                <h3 className="qualification_title">Ux Designer</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021 - Present
                </div>
              </div>

            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Dr.BAMU Aurnagabd</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

          </div>
        </div> 
      </div>
    </section>
  )
}

export default Qualification
