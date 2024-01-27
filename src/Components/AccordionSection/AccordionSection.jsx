import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '../ExpandMoreIcon/ExpandMoreIcon';

import './AccordionSection.css';

const AccordionSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq">
      <h2 className="faq-text">FAQs</h2>
      <div className="accordion-container">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">Is QTify free to use?</p>
          </AccordionSummary>

          <AccordionDetails>
            <p className="accordion-details-text">
              Yes! It is 100% free, and has 0% ads!
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className="accordion-summary"
          >
            <p className="accordion-summary-text">
              Can I download and listen to songs offline?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordion-details-text">
              Sorry, unfortunately we dont provide the service to download any
              songs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;
