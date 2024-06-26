import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nikhil Behara</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>student(currently)</HighlightAlt> based in Telangana,
        India.
      </p>
      <p>
       I am passionate about computational neuroscience and competitive programming <br />
        and an expert in the darkest kind of humour.
      </p>
    </AboutWrapper>
  );
};

export default About;
