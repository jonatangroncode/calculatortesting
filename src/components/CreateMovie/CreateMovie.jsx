import React from "react";

const CreateMovie = ({ handleSubmit, formData, setFormData }) => {
  return (
    <section>
      <h2>Skapa ny film</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="title"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="director">Director: </label>
          <input
            type="director"
            id="director"
            name="director"
            value={formData.director}
            onChange={(e) =>
              setFormData({ ...formData, director: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="productionYear">productionYear: </label>
          <input
            type="number"
            id="productionYear"
            name="productionYear"
            value={formData.productionYear}
            onChange={(e) =>
              setFormData({ ...formData, productionYear: e.target.value })
            }
            required
          />
        </div>
        <button>Posta film</button>
      </form>
    </section>
  );
};

export default CreateMovie;
