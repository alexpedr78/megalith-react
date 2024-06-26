import OneMegaMap from "../OneMegaMap/OneMegaMap";
import { useState } from "react";
import Logo from "./../../assets/favorite.png";

function ListItem({
  site,
  updateDescription,
  setUpdatedDescription,
  updatedName,
  setUpdatedName,
  handleCancelEdit,
  handleEdit,
  handleDelete,
  handleUpdate,
  editId,
}) {
  const [map, setMap] = useState(false);
  const {
    id,
    state,
    type,
    name,
    village,
    description,
    position,
    favorites,
    comments,
  } = site;

  return (
    <article className="megalithItem" key={id}>
      <div className="introListItem">
        <div className="paragraph-listItem">
          <p>{name ? `Name of the site : ${name}` : null}</p>
          <p>{type ? `Category of the site : ${type}` : null}</p>
          <p>{state ? `Region : ${state}` : null}</p>
          <p>{village ? `Village : ${village}` : null}</p>
          <p>{description ? `Description : ${description}` : null}</p>
          {comments && comments.text
            ? comments.map((comment, index) => (
                <p key={index}>{comment.text}</p>
              ))
            : null}
          <p>
            {position
              ? `Position of the site : (${
                  position.lat ? position.lat : "N/A"
                }, ${position.long ? position.long : "N/A"})`
              : null}
          </p>
          <p>
            {favorites && favorites.length ? <img src={Logo} alt="" /> : null}
          </p>
        </div>
        {map ? <OneMegaMap oneMega={site} /> : null}
      </div>
      <div className="mapUpdate-button">
        <button className="button-55" onClick={() => setMap(!map)}>
          Map
        </button>
        <button className="button-55" onClick={() => handleEdit(id)}>
          Update
        </button>
        {editId === id ? (
          <div>
            <div>
              <label htmlFor="">New Name</label>
              <input
                className="button-55"
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">New Description</label>
              <input
                className="button-55"
                type="text"
                value={updateDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </div>
            <div className="buttonInsideEdit">
              <button
                className="button-55"
                onClick={() => {
                  handleUpdate(id, {
                    id,
                    state,
                    type,
                    name: updatedName,
                    village,
                    description: updateDescription,
                    position: {
                      long: position.long,
                      lat: position.lat,
                    },
                  });
                  setUpdatedName(""); // Reset updated name
                  setUpdatedDescription(""); // Reset updated description
                }}
              >
                Save
              </button>
              <button
                className="button-55"
                onClick={() => {
                  handleCancelEdit();
                  setUpdatedName(""); // Reset updated name
                  setUpdatedDescription("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="delete-ListItem">
        <button className="button-55" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default ListItem;
