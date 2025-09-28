package com.cinehub.platform.be.common.exception;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex,
                                                        HttpServletRequest request) {
        return buildError(HttpStatus.NOT_FOUND, ex.getMessage(), request.getRequestURI());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAll(Exception ex,
                                                   HttpServletRequest request) {
        return buildError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(), request.getRequestURI());
    }

    private ResponseEntity<ErrorResponse> buildError(HttpStatus status, String message, String path) {
        ErrorResponse body = new ErrorResponse(
                status.value(),
                message,
                path,
                LocalDateTime.now()
        );

        return ResponseEntity
                .status(status)
                .contentType(MediaType.APPLICATION_JSON)
                .body(body);
    }
}
