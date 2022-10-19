import { gql } from '@apollo/client';

export const changeLanguage = (language) => {
  const QUERY = gql`
  query formLabels {
    formLabelsCollection(locale: "${language}") {
      items {
        titleP1
        titleP2
        titleP3
        error
        petName
        phPetName
        owner
        phOwner
        email
        phEmail
        date
        symptoms
        phSymptoms
        editPatient
        addPatient
      }
    }
    mainTitleCollection(locale: "${language}") {
      items {
        titleP1
        titleP2
      }
    }
    patientCardsCollection(locale: "${language}") {
      items {
        titleP1Empty
        titleP2Empty
        titleP3Empty
        titleP1
        titleP2
        titleP3
        editButton
        deleteButton
      }
    }
  }
`;

  return QUERY;
};
