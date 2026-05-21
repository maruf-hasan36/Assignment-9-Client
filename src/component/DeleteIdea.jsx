"use client";

import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const DeleteIdea = ({ idea }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/ideas/${idea?._id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Idea deleted successfully");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete idea");
    }
  };

  return (
    <AlertDialog>
      <Button
        className="p-2 rounded-full bg-black/50 hover:bg-red-500 transition"
        title="Delete"
      >
        <FaTrash className="text-white text-sm" />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project Idea?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{idea?.title}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Idea
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteIdea;
