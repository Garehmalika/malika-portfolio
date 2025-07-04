import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdBriefcase } from "react-icons/io";



function Experience() {
  return (
    <VerticalTimeline>
  


  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="Mai 2025 – Septembre 2025"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Data scientist | Groupe COSUMAR</h3>
  <p>
    <b>• Application de l’intelligence artificielle à l’agriculture de précision :</b> Participation à la modélisation, au développement et à l’amélioration d’un système d’IA avancé pour permettre l’identification et la détection automatiques et précises des adventices, des maladies et des ravageurs impactant les cultures de betterave sucrière.<br />
    <b>• Traitement des bases de données massives :</b> Exploitation et analyse d’imageries haute résolution acquises par drones (UAV), utilisant des compétences en machine learning et deep learning. Mise en place de pipelines automatisés pour le nettoyage et la préparation des données, améliorant la qualité et réduisant le temps de préparation de 30%.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="Mars 2025 – Juillet 2025"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Data scientist | Technocolabs</h3>
  <p>
    <b>• Optimisation de la logistique du dernier kilomètre :</b> Mise en œuvre de solutions d’optimisation des itinéraires de livraison utilisant des techniques de Machine Learning. Expertise en collecte et prétraitement de données massives, modélisation prédictive, et optimisation des flux logistiques.<br />
    <b>• Amélioration des performances de modèle :</b> Développement d’un régressseur Lasso atteignant une précision de 97% et déploiement en production, réduisant les coûts opérationnels de 15% et améliorant la satisfaction client de 22%.<br />
    <b>• Impact business :</b> Réduction du temps de livraison moyen de 18 minutes et augmentation de la capacité de traitement quotidienne de 35%.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
  date="Juillet 2024 – Septembre 2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<IoMdBriefcase />}
>
  <h3 className="vertical-timeline-element-title">Data Analyste | Groupe OCP</h3>
  <p>
    <b>• Création et mise en œuvre d’une solution d’analyse des demandes de prêts internes :</b> Conception et développement d’une application web destinée à rationaliser l’analyse des demandes de prêts internes. Visualisations, dashboards et critères d’éligibilité automatisés, optimisation du temps de travail de 40% et amélioration de l’efficacité des décisions.
  </p>
</VerticalTimelineElement>

 
</VerticalTimeline>
  );
}

export default Experience;
