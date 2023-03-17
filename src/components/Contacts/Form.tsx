import { TitleH3 } from "components/common/Typografy.styled";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";

export const Form = () => {
  return (
    <form>
      <TitleH3>Contact form</TitleH3>
      <Input type="text" name="name" placeholder="your name" />
      <Input type="text" name="contact" placeholder="phone number or email" />
      <Textarea name="comment" placeholder="leave comment..." rows={5} />
      <PrimaryBtn type="submit" title="Send a message" onClick={() => console.log('submit')} />
    </form>
  );
};