<!-- <template>
    <div>
      <h1>Item Manager</h1>
      <button @click="openCreateModal">Create New Item</button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td><img :src="item.image" alt="item.name" width="100"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.stock }}</td>
            <td>
              <button @click="openEditModal(item)">Edit</button>
              <button @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showModal" class="modal">
        <h2>{{ isEditing ? 'Edit Item' : 'Create Item' }}</h2>
        <form @submit.prevent="isEditing ? updateItem() : createItem()">
          <input v-model="formData.name" placeholder="Name" required />
          <input v-model.number="formData.price" placeholder="Price" required />
          <input v-model.number="formData.stock" placeholder="Quantity" required />
          <input v-model="formData.image" placeholder="Image URL" required />
          <button type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
          <button type="button" @click="closeModal">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { getItems, createItem, updateItem, deleteItem } from "@/services/itemService";
  
  export default {
    data() {
      return {
        items: [],
        showModal: false,
        isEditing: false,
        formData: {
          id: null,
          name: "",
          price: null,
          stock: null,
          image: "",
        },
      };
    },
    methods: {
      async fetchItems() {
        this.items = await getItems();
      },
      openCreateModal() {
        this.resetForm();
        this.showModal = true;
        this.isEditing = false;
      },
      openEditModal(item) {
        this.formData = { ...item };
        this.showModal = true;
        this.isEditing = true;
      },
      async createItem() {
        await createItem(this.formData);
        this.closeModal();
        this.fetchItems();
      },
      async updateItem() {
        await updateItem(this.formData.id, this.formData);
        this.closeModal();
        this.fetchItems();
      },
      async deleteItem(id) {
        if (confirm("Are you sure you want to delete this item?")) {
          await deleteItem(id);
          this.fetchItems();
        }
      },
      closeModal() {
        this.showModal = false;
        this.resetForm();
      },
      resetForm() {
        this.formData = { id: null, name: "", price: null, stock: null, image: "" };
      },
    },
    async mounted() {
      await this.fetchItems();
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
   -->