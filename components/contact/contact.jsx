import StyledContact from "./styledContact";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h1>Get in touch</h1>
      <ul className="information">
        <li>
          <a href="https://github.com/olivierpas13">Github</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="mailto: olivier_paspuel@hotmail.com">
            olivier_paspuel@hotmail.com
          </a>
        </li>
      </ul>
    </StyledContact>
  );
};

export default Contact;
