import { gql } from '@apollo/client';

export const QUERY = (locale) => {
  return gql`
  query formLabels {
    formLabelsCollection(locale: "${locale}") {
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
    mainTitleCollection(locale: "${locale}") {
      items {
        titleP1
        titleP2
      }
    }
    patientCardsCollection(locale: "${locale}") {
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
};
