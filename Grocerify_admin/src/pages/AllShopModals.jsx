import React from "react";

const AllShopModel = ({
  isModalOpen,
  setIsModalOpen,
  ShopDetails,
  setSelectedShopFromModal,
}) => {
  console.log(ShopDetails);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: 1,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80%",
            backgroundColor: "#fefefe",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "70%",
            overflowY: "auto",
          }}
        >
          {/* Modal content goes here */}
          <span
            style={{
              color: "#aaa",
              float: "right",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            &times;
          </span>
          <p style={{ textAlign: "center", fontWeight: "500" }}>
            Select instructorID from Instructors
          </p>
          <div className="grid grid-cols-4 gap-8">
            {ShopDetails?.map((shop, index) => (
              <div
                key={index}
                className="max-w-xs mt-[1rem] mb-[1rem] mr-2 h-[10rem] w-[19rem] font-semibold cursor-pointer"
              >
                <div
                  className="card mb-3"
                  onClick={() => {
                    setSelectedShopFromModal(shop._id);
                    setIsModalOpen(false); // This will close the modal
                  }}
                >
                  <img
                    src={shop.shop_primary_image_url}
                    alt={`Uploaded ${index}`}
                    className="rounded-md w-[19rem] h-[10rem] object-cover "
                  />
                  <span className="">{shop.shopName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllShopModel;
