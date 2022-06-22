import "./footer.css";

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="black" id="footer">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1 btn-hover"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Inscrivez-vous à la newsletter</strong>
                </p>
              </div>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  label="Adresse Mail"
                  className="mb-4"
                />
              </MDBCol>

              <div className="col-auto">
                <MDBBtn
                  outline
                  color="dark"
                  type="submit"
                  className="mb-4 btn-hover"
                >
                  S'abonner
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <div className="container p-4">
          <MDBRow>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-md-start">
              <h5 className="text-uppercase">Infos boutique</h5>

              <ul className="list-unstyled mb-0 ">
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Nouveautés
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Figurines
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Vêtements
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Décorations
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-md-start">
              <h5 className="text-uppercase mb-0">Infos pratique</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Livraison
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Politique des retours
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Points fidélités
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black a_after_hover">
                    Infos légales
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-md-start">
              <h5 className="text-uppercase">MANFRA</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
          </MDBRow>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright : RAJH
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}
