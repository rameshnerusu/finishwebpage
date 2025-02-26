import "./Cards.css";

const Cards1 = () => {
  return (
    <>
      <div className=" d-flex flex-row each_card">
        <div className="img">
          <img src="https://www.ifinish.in/uploads/EB_115c343463041f8763d7552fdce43c9f.jpg" />{" "}
        </div>

        <div className="each_card_details ms-2">
          <div>
            {" "}
            <h5 className="bg-danger date">24/MARCH/2024</h5>
          </div>
          <p>MARCH MARATHON RUNNING CHALLENGE 2024</p>
          <p>Organised By</p>
          <p>Sports Zone Events ANYWHERE</p>

          <div className="d-flex flex-row justify-content-between">
            <h6>REGISTER</h6>
            {/* share icon */}
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards1;
