import helper from './assets/icons/helper.png'
import housework from './assets/icons/housework.png'
import eating from './assets/icons/eating.png'
import shopping from './assets/icons/shopping.png'
import family from './assets/icons/family.png'
import documents from './assets/icons/documents.png'


export const servicesDatas = [
  {
    name: "Compagnie",
    img: helper,
    id: 1,
    description:["Jeux de société", "Lecture", "Promenades", "Resocialisation", "Visite familles", "..."]
  },
  {
    name: "Entretien du logement",
    img: housework,
    id: 2,
    description:["Sol", "Vaisselle", "Entretien du linge", "Poussière", "..."]
  },
  {
    name: "Repas à domicile",
    img: eating,
    id: 3,
    description:["Préparation du repas", "Aide alimentaire", "Service"]
  },
  {
    name: "Courses",
    img: shopping,
    id: 4,
    description: ["Avec le bénéficiare", "Sans le bénéficiaire"]
  },
  {
    name: "Accompagnement des familles fragilisées",
    img: family,
    id: 5,
    description:["Soutien moral", "Aide administrative"]
  },
  {
    name: "Assistance administrative",
    img: documents,
    id: 6,
    description:["Aide au bénéficiaire", "Aide à la famille du bénéficiaire"]
  }
];
