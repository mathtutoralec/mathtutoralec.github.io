import DeleteDialog from "../dialog/DeleteDialog";
import Switched from "../common/Switched";
import SaveButton from "../button/SaveButton";
import DeleteButton from "../button/DeleteButton";
import ButtonBanner from "../button/ButtonBanner";
import useDialog from "../../hooks/useDialog";
import { ConfirmDialog } from "../dialog";
import CustomButton from "../button/CustomButton";
import BackButton from "../button/BackButton";
import UploadButton from "../button/UploadButton"

export const EntityFormFooter = props => {
  const {
    entityName,
    isDirty,
    noSave = false,
    noDelete = false,
    extraButtons = [],
    saveStatements = [],
    handleSave,
    saveDisabled,
    deleteStatements = [],
    handleDelete,
    deleteDisabled,
    isDeleting,
    isUpdating,
    deleteDialog,
    requireConfirm,
    confirmSave,
    confirmSaveMessage,
    ...other
  } = props;

  const saveDialog = useDialog();
  const onClickSave = confirmSave ? saveDialog.onOpen : handleSave;

  const buttons = [
    {
      Component: DeleteButton,
      onClick: handleDelete,
      disabled: deleteDisabled,
      statements: deleteStatements,
      position: "left",
      isShown: !noDelete,
    },
    ...extraButtons,
    {
      Component: SaveButton,
      onClick: onClickSave,
      loading: isUpdating,
      disabled: saveDisabled,
      statements: saveStatements,
      isShown: !noSave,
      isDirty: isDirty,
    },
  ];

  return (
    <>
      <ButtonBanner buttons={buttons} {...other} />
      <Switched isShown={!noDelete}>
        <DeleteDialog
          {...deleteDialog}
          requireConfirm={requireConfirm}
          handleDelete={handleDelete}
          entityName={entityName}
          isDeleting={isDeleting}
        />
      </Switched>
      <Switched isShown={!!confirmSave}>
        <ConfirmDialog
          title="Save Confirmation"
          content={confirmSaveMessage || "Are you sure you want to save these changes?"}
          onConfirm={handleSave}
          loading={isUpdating}
          forceButtonClick
          closeOnConfirm
          {...saveDialog}
        />
      </Switched>
    </>
  );
};

export default EntityFormFooter;
