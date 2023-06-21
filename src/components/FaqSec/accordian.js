import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";
export default function SimpleAccordion() {
  return (
    <div className="faqQuestions">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            color: "white",
            backgroundColor: "var(--black-color)",
            border: "1px solid white",
            borderRadius: "3px",
            "& .MuiSvgIcon-root": { color: "white" }
          }}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "black",
            backgroundColor: "white"
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            color: "white",
            backgroundColor: "var(--black-color)",
            border: "1px solid white",
            borderRadius: "3px",
            "& .MuiSvgIcon-root": { color: "white" }
          }}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "black",
            backgroundColor: "white"
          }}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
