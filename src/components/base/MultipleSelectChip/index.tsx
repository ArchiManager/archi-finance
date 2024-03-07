import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Angular",
    "Vue.js",
    "HTML5",
    "CSS3",
    "TypeScript",
    "Redux",
    "GraphQL",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Framework",
    ".NET Core",
    "C#",
    "ASP.NET",
    "PHP",
    "Laravel",
    "Symfony",
    "Ruby",
    "Ruby on Rails",
    "SQL",
    "Database design",
    "MySQL",
    "PostgreSQL",
    "NoSQL databases",
    "MongoDB",
    "Git",
    "Version control",
    "SDLC",
    "Agile methodologies",
    "Scrum",
    "Kanban",
    "RESTful APIs",
    "SOAP",
    "Microservices architecture",
    "Docker",
    "Kubernetes",
    "Cloud computing",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Serverless computing",
    "CI/CD pipelines",
    "Jenkins",
    "Travis CI",
    "GitHub Actions",
    "Testing frameworks",
    "Jest",
    "Mocha",
    "Selenium",
    "Cypress",
    "Frontend build tools",
    "Webpack",
    "Babel",
    "Gulp",
    "Grunt",
    "Responsive web design",
    "CSS frameworks like Bootstrap",
    "CSS preprocessors like Sass",
    "Browser developer tools",
    "Performance optimization",
    "Web accessibility standards",
    "SEO best practices",
    "Web security principles",
    "OWASP Top 10 vulnerabilities",
    "Authentication and authorization",
    "OAuth",
    "JWT",
    "Encryption techniques",
    "HTTPS",
    "Cross-site scripting (XSS)",
    "Mobile app development",
    "React Native",
    "Flutter",
    "Native app development",
    "Android development (Java/Kotlin)",
    "iOS development (Swift/Objective-C)",
    "UI/UX design principles",
    "Design tools like Sketch or Figma",
    "User-centered design (UCD)",
    "Prototyping",
    "Wireframing",
    "Design systems",
    "Component libraries",
    "Responsive typography",
    "Animation libraries",
    "Adobe Creative Suite",
    "Design patterns",
    "Color theory",
    "User testing",
    "Analytical thinking",
    "Problem-solving techniques",
    "Algorithms and data structures",
    "Computational complexity",
    "Debugging and troubleshooting",
    "Communication skills"
];

function getStyles(skill: string, selectedSkill: readonly string[], theme: Theme) {
    return {
        fontWeight:
            selectedSkill.indexOf(skill) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface MultipleSelectChipInterface {
    selectedSkill: string[];
    setSelectedSkill: (value: React.SetStateAction<string[]>) => void;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    fullWidth?: boolean;
}

export default function MultipleSelectChip({
    selectedSkill,
    setSelectedSkill,
    label,
    variant = "standard",
    fullWidth = true
}: MultipleSelectChipInterface) {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<typeof selectedSkill>) => {
        const {
            target: { value },
        } = event;
        setSelectedSkill(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <InputLabel id="searchSkillChipLabel">{label}</InputLabel>
            <Select
                labelId="searchSkillChipLabel"
                id="multiple-chip-search-skill"
                multiple
                sx={{
                    width: (fullWidth) ? "100%" : "auto",
                }}
                className="mt-2"
                variant={variant}
                value={selectedSkill}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {skills.map((skill) => (
                    <MenuItem
                        key={skill}
                        value={skill}
                        style={getStyles(skill, selectedSkill, theme)}
                    >
                        {skill}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}