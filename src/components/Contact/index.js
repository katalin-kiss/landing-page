import React, { useState } from 'react';
import {
  ContactContainer,
  FormWrapper,
  FormContent,
  Icon,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Form,
  Text,
  ArrowIcon,
  Card,
} from './ContactElements';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <Icon to="/">
          <ArrowIcon />
        </Icon>
        <FormContent>
          {isSubmitted ? (
            <Card>
              <Text>
                Submission was successful.{'\n'}We will contact you soon!
              </Text>
            </Card>
          ) : (
            <Form action="#" onSubmit={onSubmit}>
              <FormH1>Contact Form</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Phone</FormLabel>
              <FormInput type="tel" required />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          )}
        </FormContent>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;
