"use client";

import { Button, Modal } from "@heroui/react";
import {
  FaEdit,
  FaExclamationTriangle,
  FaFileAlt,
  FaImage,
  FaLightbulb,
  FaMoneyBillWave,
  FaRobot,
} from "react-icons/fa";
import { Envelope } from "@gravity-ui/icons";
import toast from "react-hot-toast";

const EditIdea = ({ idea }) => {
  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const ideaNew = Object.fromEntries(formData.entries());
    ideaNew.estimatedBudget = parseFloat(ideaNew.estimatedBudget) || 0;
    
  try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/ideas/${idea._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ideaNew),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Idea updated successfully!");
        window.location.reload()
      } else {
        toast.error("Nothing updated!");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong!");
    }

  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        className="p-2 rounded-full bg-black/50 hover:bg-violet-500 transition"
        title="Edit"
      >
        <FaEdit className="text-white text-sm" />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Icon className="bg-blue-500/20 text-blue-400">
                <Envelope className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-white">
                Edit Your Idea
              </Modal.Heading>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6 bg-gradient-to-br from-[#020817] via-[#0f172a] to-[#111827] text-white max-h-[75vh] overflow-y-auto">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Title */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaLightbulb className="text-yellow-400" />
                    Idea Title
                  </label>

                  <input
                    name="title"
                    defaultValue={idea?.title || ""}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500"
                    placeholder="Enter title"
                  />
                </div>

                {/* Image */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaImage className="text-pink-400" />
                    Image URL
                  </label>

                  <input
                    name="imageURL"
                    defaultValue={idea?.imageURL || ""}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
                    placeholder="Image URL"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaRobot className="text-cyan-400" />
                    Category
                  </label>

                  <select
                    name="category"
                    defaultValue={idea?.category || ""}
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                  >
                    <option value="">Select Category</option>
                    <option value="AI">AI</option>
                    <option value="EdTech">EdTech</option>
                    <option value="Health">Health</option>
                    <option value="FinTech">FinTech</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaMoneyBillWave className="text-green-400" />
                    Budget
                  </label>

                  <input
                    name="estimatedBudget"
                    type="number"
                    defaultValue={idea?.estimatedBudget || 0}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                    placeholder="Budget"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2 space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaFileAlt className="text-blue-400" />
                    Short Description
                  </label>

                  <textarea
                    name="shortDescription"
                    rows="3"
                    defaultValue={idea?.shortDescription || ""}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Problem */}
                <div className="md:col-span-2 space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <FaExclamationTriangle className="text-red-400" />
                    Problem Statement
                  </label>

                  <textarea
                    name="problemStatement"
                    rows="4"
                    defaultValue={idea?.problemStatement || ""}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    slot="close"
                    type="submit"
                    className="w-full py-4 cursor-pointer rounded-2xl bg-gradient-to-r from-violet-700 to-blue-700 font-bold text-lg hover:scale-[1.02] transition"
                  >
                    Update Idea
                  </button>
                </div>
              </form>
            </Modal.Body>

            {/* FOOTER */}
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditIdea;
