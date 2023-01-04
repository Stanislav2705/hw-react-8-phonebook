import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilter, selectIsLoading, selectVisibleContacts } from "redux/selectors";
import { useEffect } from "react";

import FormPhoneBook from "../../components/FormPhoneBook/FormPhoneBook";
import PhoneBookList from "../../components/PhoneBookList/PhoneBookList";
import BlockPhone from "../../components/BlockPhone/BlockPhone";
import Filter from "../../components/Filter/Filter";

import { fetchContacts } from "redux/contacts/requests";
import { Error, Message } from "./Phonebook.styled";
import Loader from "shared/Loader/Loader";
import Box from "shared/Box/Box";

export default function Phonebook() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign='center'>
        <BlockPhone title='Phonebook'>
        <FormPhoneBook />
        </BlockPhone>
        <BlockPhone title="Contacts">
        <Filter />
        {isLoading && <Loader />}
        {error && <Error>Something goes wrong. {error}.</Error>}
        {contacts.length > 0 && <PhoneBookList />}
        {(filter !== "" && contacts.length === 0) && <Message>This name was not found</Message>}
        </BlockPhone>
    </Box>
  )
}
