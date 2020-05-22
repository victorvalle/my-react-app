import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="TopArea">
        <div className="Illustration">
          <img src={require('../images/maria-victor.svg')} width="100%"/>
        </div>
        <div className="MainCall">
          <h1>María y Víctor</h1>
          <p>Queremos que seais parte de nuestra historia y para ello necesitamos vuestra confirmación</p>
          <Link to="https://www.google.com"><button>CONFIRMAR</button></Link>
        </div>
      </div>
      <div className="break1">
        <div className="b1-leaves">
          <img src={require('../images/break1.png')} width="100%"/>
        </div>
        <span className=""></span>
      </div>
      <div className="LeafRight">
        <img src={require('../images/leaf-right.png')} width="100%"/>
      </div>
      <div className="History">
        <h2>Nuestra Historia</h2>
        <span className="underline"></span>
        <p>En un lugar de la Mancha2, de cuyo nombre no quiero acordarme3, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor4. Una olla de algo más vaca que carnero, salpicón las más noches5, duelos y quebrantos los sábados6, lantejas los viernes7, algún palomino de añadidura los domingos8, consumían las tres partes de su hacienda9. El resto della concluían sayo de velarte10, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo11, y los días de entresemana se honraba con su vellorí de lo más fino12. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera13. Frisaba la edad de nuestro hidalgo con los cincuenta años14. Era de complexión recia, seco de carnes, enjuto de rostro15, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímilesII se deja entender que se llamaba «Quijana»III, 16. Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad. Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías, con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza y aun la administración de su hacienda; y llegó a tanto su curiosidad y desatino en esto17, que vendió muchas hanegas de tierra de sembradura para comprar libros de caballerías en queIV leer18, y, así, llevó a su casa todos cuantos pudo haber dellos; y, de todos, ningunos le parecían tan bienV como los que compuso el famoso Feliciano de Silva19, porque la claridad de su prosa y aquellas entricadas razones suyas le parecían de perlas, y más cuando llegaba a leer aquellos requiebros y cartas de desafíos20, donde en muchas partes hallaba escrito: «La razón de la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece, que con razón me quejo de la vuestra fermosura»21. Y también cuando leía: «Los altos cielos que de vuestra divinidad divinamente con las estrellas os fortifican y os hacen merecedora del merecimiento que merece la vuestra grandeza...</p>
        {/* <img src={require('../images/OurTrip.png')} width="100%"/> */}
      </div>
      <div className="break2">
        <span className=""></span>
        <div className="b2-leaves">
          <img src={require('../images/break2.png')} width="100%"/>
        </div>
      </div>
      <div className="LeafLeft">
        <img src={require('../images/leaf-left.png')} width="100%"/>
      </div>
      <div className="Place">
        <h2>Cermemonia y Convite</h2>
        <span className="underline"></span>
        <br/>
        <p className="bold">La Quinta de Illescas</p>
        <p>Ctra. Madrid - Toledo (A-42)</p>
        <p>Km. 30 (Salida 30B)</p>
        <p>45200 Illescas (Toledo) </p>
        <p>Tel. 925 51 12 07 </p>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.9823953130526!2d-3.818030084799002!3d40.16494567883813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41f4029c1e3685%3A0xe528694c1b18788e!2sLa%20Quinta%20de%20Illescas%20-%20Finca%20para%20bodas!5e0!3m2!1sen!2ses!4v1588786713314!5m2!1sen!2ses" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
      </div>
      
    </div>
    
  </div>
)

export default IndexPage
