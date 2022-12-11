import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { selectedOptions } from "../options.js";

export default function ModalOption({ data, setShowData, standard }) {
  const item = data.data; // todo change variable name

  console.log("item line 6 -->", item);
  const closeModalHandler = () => {
    setShowData({ show: false, data: data });
  };

  return (
    <>
      <Modal show={data.show} centered className="modal__options">
        <Button
          className="close__modal"
          variant="none"
          onClick={closeModalHandler}
        >
          <i className="fa-sharp fa-solid fa-circle-xmark fa-2x"></i>
        </Button>

        <Modal.Body>
          <Row>
            <Col sm={6} className="mt-5">
              <Row>
                <Col
                  sm={4}
                  className="bg-primary d-flex justify-content-center align-items-center"
                >
                  <p className="text-white mb-0">{item.label}</p>
                </Col>
                <Col sm={8} className="px-2">
                  <div className="modal__option">
                    {typeof item.variation !== "undefined"
                      ? item.variation.map((i) => (
                          <div key={i.id} className="bg-primary mb-2">
                            <p
                              className="p-2 mb-0 lh-sm text-white text-center"
                              dangerouslySetInnerHTML={{
                                __html: i.label.replace(
                                  "<dynamic>",
                                  `"${standard}"`
                                ),
                              }}
                            ></p>
                          </div>
                        ))
                      : ""}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={6} className="position-relative overflow-hidden mt-4">
              <div className="curved__line"></div>
              <ul className="mt-1">
                {selectedOptions.map((option) => (
                  <li
                    key={option.id}
                    className="d-flex gap-3 mb-3 align-items-center overflow-visible position-relative"
                  >
                    <div
                      className={
                        typeof item.active !== "undefined"
                          ? item.active.includes(option.id)
                            ? "active__option bg-dark-green"
                            : "active__option bg-gray"
                          : ""
                      }
                    ></div>
                    <p className="mb-0">{option.label}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
