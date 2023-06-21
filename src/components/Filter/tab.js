import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FilterSlider from "./filterSlider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs({ data, genre }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const jazz = data.filter((e) => {
    return e.genre.key === "jazz";
  });
  const rock = data.filter((e) => {
    return e.genre.key === "rock";
  });
  const pop = data.filter((e) => {
    return e.genre.key === "pop";
  });
  const blues = data.filter((e) => {
    return e.genre.key === "blues";
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& button": { color: "white" },
            "& button.Mui-selected": { color: "white" }
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "green"
            }
          }}
        >
          <Tab label="ALL" />
          {genre.map((e) => (
            <Tab key={e.id} label={e.label} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FilterSlider data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FilterSlider data={jazz} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FilterSlider data={rock} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FilterSlider data={pop} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FilterSlider data={blues} />
      </TabPanel>
    </Box>
  );
}
