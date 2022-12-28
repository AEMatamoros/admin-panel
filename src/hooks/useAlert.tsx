import React from "react";
import Swal from "sweetalert2";

export default function useAlert() {
  return {
    topAlert: (
      position: any,
      text: any,
      showConfirmButton: any,
      timer: any,
      timerProgressBar: any,
      width: any
    ) =>
      Swal.fire({
        position: position,
        text: text,
        showConfirmButton: showConfirmButton,
        timer: timer,
        timerProgressBar: timerProgressBar,
        width: width,
        background: "#4ADE80",
        color: "white",
      }),

    genericAlert: (
      title: any,
      icon: any,
      html: any,
      showCloseButton: any,
      showCancelButton: any,
      focusConfirm: any,
      confirmButtonText: any,
      confirmButtonAriaLabel: any,
      cancelButtonText: any,
      cancelButtonAriaLabel: any,
      confirmButtonColor: any
    ) =>
      Swal.fire({
        title: title,
        icon: icon,
        html: html,
        showCloseButton: showCloseButton,
        showCancelButton: showCancelButton,
        focusConfirm: focusConfirm,
        confirmButtonText: confirmButtonText,
        confirmButtonAriaLabel: confirmButtonAriaLabel,
        confirmButtonColor: confirmButtonColor,
        cancelButtonText: cancelButtonText,
        cancelButtonAriaLabel: cancelButtonAriaLabel,
      }),
  };
}
