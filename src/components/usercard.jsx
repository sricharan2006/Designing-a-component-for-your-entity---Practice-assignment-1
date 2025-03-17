// write the component code here

const Usercard = () => {
  const name = "Vignesh";
  const email = "vignesh@example.com";
  const phone = "+1 (123) 456789";
  const address = "123 chittoor";
  const profilePic = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (
    <div className="user-card">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>

      <style jsx>{`
        .user-card {
          width: 250px;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          background-color: white;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }

        .profile-pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        p {
          font-size: 0.9rem;
          color: #1d0808;
        }
      `}</style>
    </div>
  );
};

export default Usercard;