import { Formik } from "formik";
import { FormBox, Title, Input, Label, Button } from "./PBForm.styled";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from "redux/contactsSlice";

const initialValues = { name: "", number: "" };

export const PBForm = () => {
  const { data } = useGetContactsQuery();
  const [createContact, { isLoading: isCreated }] = useCreateContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const haveContact = data.some((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (name === "") {
      toast.error("name is a required field");
      return;
    } else if (number === "") {
      toast.error("Number is a required field");
      return;
    } else if (!Number.parseInt(number)) {
      toast.error("Number cannot be a string");
      return;
    }

    if (haveContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    createContact({
      name,
      number,
    });

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormBox>
        <Title>Add contact</Title>

        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
        </Label>
        <Button type="submit" disabled={isCreated}>
          {isCreated ? (
            <Oval
              height="20"
              width="20"
              strokeWidth={5}
              strokeWidthSecondary={5}
              color="rgba(242, 255, 0, 0.8)"
              secondaryColor="rgba(242, 255, 0, 0.1)"
            />
          ) : (
            "Add"
          )}
        </Button>
      </FormBox>
    </Formik>
  );
};
