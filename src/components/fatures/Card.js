import React from "react";
import { Image } from "react-bootstrap";

const Card = ({ cardData, index }) => {
  return (
    <>
      <div className="wrapper">
        <div className="pic">
          <Image src={`./images/${cardData.image}`} />
        </div>
        <p className="header">{cardData.title}</p>
        <p className="content">{cardData.des}</p>
        <a href="#_">
          <div className="button-center">
            <button
              type="button"
              class="btn btn-primary leesmeer1"
              data-toggle="modal"
              data-target={`#exampleModalLong-${index}`}
            >
              See More
            </button>
          </div>
        </a>

        {/* Modal */}

        <div
          class="modal fade"
          id={`exampleModalLong-${index}`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  {cardData.dialogData?.heading}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="dialog-img">
                <div class="row">
                  <div class="col-sm">
                    <Image src={`./images/${cardData.dialogData?.image1}`} />
                  </div>
                  <div class="col-sm">
                    <Image src={`./images/${cardData.dialogData?.image1}`} />
                  </div>
                  <div class="col-sm">
                    <Image src={`./images/${cardData.dialogData?.image1}`} />
                  </div>
                </div>
              </div>
              <div class="modal-body">{cardData.dialogData?.para}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-got"
                  data-dismiss="modal"
                >
                  Got It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
