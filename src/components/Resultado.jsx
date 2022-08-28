import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Imagen = styled.img`
  display: block;
  width: 150px;
`

const Texto = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="Imagen cripto" />
      <div>
        <Texto>
          El precio es de: <span>{PRICE}</span>
        </Texto>
        <Precio>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Precio>
        <Precio>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Precio>
        <Precio>
          Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Precio>
        <Precio>
          Ultima actualización: <span>{LASTUPDATE}</span>
        </Precio>
      </div>
    </Contenedor>
  );
};

export default Resultado;
