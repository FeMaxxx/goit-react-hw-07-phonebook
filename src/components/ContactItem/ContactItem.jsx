import { Oval } from "react-loader-spinner";
import { Item, Name, Number, Button } from "./ContactItem.styled";

const { useDeleteContactMutation } = require("redux/contactsSlice");

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{phone}</Number>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <Oval
            height="16"
            width="16"
            strokeWidth={5}
            strokeWidthSecondary={5}
            color="rgba(255, 0, 0, 0.8)"
            secondaryColor="rgba(165, 0, 0, 0.6)"
          />
        ) : (
          " Delete"
        )}
      </Button>
    </Item>
  );
};

export { ContactItem };
