function Règles() {
  return (
    <>
      <div>
        <h2 className="helpersTitle">Objectif du Jeu</h2>
        <p className="helpersText">
          Dans Street Art Hunter, l'objectif est de découvrir des œuvres de
          street art disséminées dans votre ville en utilisant la
          géolocalisation de votre appareil. Vous serez guidé par une carte
          interactive qui vous montre les emplacements des œuvres d'art. En vous
          déplaçant dans la ville, vous devez localiser ces œuvres et les
          photographier pour gagner des points. Le joueur qui accumule le plus
          de points en trouvant les œuvres d'art gagne la partie.
        </p>
      </div>
      <div>
        <h2 className="helpersTitle">Déplacement et Géolocalisation</h2>
        <p className="helpersText">
          Pour jouer, activez la géolocalisation sur votre appareil mobile afin
          que le jeu puisse suivre vos déplacements en temps réel. Vous devrez
          vous déplacer physiquement dans votre ville pour explorer différents
          quartiers et trouver les œuvres de street art. Le jeu utilise votre
          position GPS pour déterminer votre proximité par rapport aux œuvres et
          vous guider vers elles. Assurez-vous de suivre les règles locales de
          circulation et de sécurité pendant votre exploration.
        </p>
      </div>
      <div>
        <h2 className="helpersTitle">Trouver et Photographier les Œuvres</h2>
        <p className="helpersText">
          Lorsque vous vous trouvez à proximité d'une œuvre de street art,
          l'application vous le signalera. Vous devez alors prendre une photo de
          l'œuvre en utilisant la fonction intégrée de l'application.
          Assurez-vous que la photo est claire et que l'œuvre est bien visible.
          Chaque œuvre découverte et photographiée correctement vous rapportera
          des points. Les œuvres doivent être authentiques et ne pas avoir été
          modifiées ou couvertes par d'autres éléments.
        </p>
      </div>
      <div>
        <h2 className="helpersTitle">Respect et Éthique</h2>
        <p className="helpersText">
          Street Art Hunter encourage le respect des œuvres d'art et de
          l'environnement urbain. Ne touchez pas, ne dégradez pas et ne modifiez
          pas les œuvres de street art que vous trouvez. Respectez les espaces
          publics et privés, et ne pénétrez pas dans des zones interdites ou
          dangereuses pour accéder aux œuvres. Le jeu est conçu pour être
          amusant et éducatif tout en promouvant le respect de l'art et de la
          culture urbaine.
        </p>
      </div>
    </>
  );
}

function Licence() {
  return (
    <>
      <h2 className="helpersTitle">Licence du Jeu "Street Art Hunter"</h2>
      <p className="helpersText">
        Le jeu Street Art Hunter est une création originale développée par Wild
        Code School, une entreprise innovante spécialisée dans l’éducation
        numérique et le développement de solutions interactives. Cette œuvre
        interactive a été conçue par une équipe talentueuse composée de Alex,
        Davido, Rosa, et Charlotte. Leur expertise collective a permis de créer
        une expérience immersive et engageante pour les amateurs de street art
        et les passionnés de jeux de géolocalisation. Wild Code School détient
        tous les droits de propriété intellectuelle associés à ce jeu, et son
        utilisation est régie par les conditions de licence spécifiques établies
        par l'entreprise. Toute reproduction, distribution ou modification non
        autorisée du jeu est strictement interdite. Nous remercions nos joueurs
        et supporters pour leur enthousiasme et leur participation à cette
        aventure artistique urbaine.
      </p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2 className="helpersTitle">Contact</h2>
      <p className="helpersText">
        Pour toute question, suggestion ou demande de support concernant Street
        Art Hunter, n'hésitez pas à nous contacter. Notre équipe est disponible
        pour vous aider et répondre à vos préoccupations. Vous pouvez nous
        joindre par les moyens suivants :
      </p>
      <p className="helpersText">
        - Téléphone : Vous pouvez nous appeler au{" "}
        <a href="tel: 01 23 45 67 89">01 23 45 67 89.</a> Nos bureaux sont
        ouverts du lundi au vendredi, de 9h à 18h.
      </p>
      <p className="helpersText">
        - Adresse Email : Pour les demandes générales ou techniques,
        envoyez-nous un courriel à{" "}
        <a href="mailto:contact@streetartHunter.com">
          contact@streetartHunter.com
        </a>
        . Nous nous efforçons de répondre dans les plus brefs délais.
      </p>
      <p className="helpersText">
        - Formulaire en Ligne : Rendez-vous sur notre{" "}
        <a href="https://www.wildcodeschool.com/fr-fr/">site web</a> pour
        remplir notre formulaire de contact en ligne. Décrivez-nous votre
        demande et nous reviendrons vers vous rapidement.
      </p>
      <p className="helpersText">
        - Réseaux Sociaux : Suivez-nous sur nos réseaux sociaux pour les
        dernières mises à jour, actualités et événements. Nous sommes présents
        sur <a href="https://www.facebook.com/?locale=fr_FR">Facebook</a>,{" "}
        <a href="https://x.com/?lang=fr">Twitter</a>, et{" "}
        <a href="https://www.instagram.com/">Instagram</a>.
      </p>
      <p className="helpersText">
        Nous nous réjouissons de recevoir vos retours et nous sommes là pour
        rendre votre expérience avec Street Art Hunter aussi agréable que
        possible. Merci de votre intérêt et de votre soutien !
      </p>
    </>
  );
}

export { Règles, Licence, Contact };
