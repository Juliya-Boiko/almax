import { motion } from "framer-motion";
import { TitleH3 } from "components/common/Typografy.styled";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
});

export const Form = () => {
  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      contact: { value: string };
      comment: { value: string };
    };
    const values = {
      name: target.name.value,
      contact: target.contact.value,
      comment: target.comment.value,
    }
    if (!values.name || !values.contact) {
      Notify.failure('Name and contact cant be empty');
    } else {
      Notify.success('We will contact you ASAP');
    }
  }

  return (
    <motion.form
      onSubmit={submitHandler}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <TitleH3>Contact form</TitleH3>
      <Input type="text" name="name" placeholder="your name" />
      <Input type="text" name="contact" placeholder="phone number or email" />
      <Textarea name="comment" placeholder="leave comment..." rows={5} />
      <PrimaryBtn type="submit" title="Send a message" />
    </motion.form>
  );
};