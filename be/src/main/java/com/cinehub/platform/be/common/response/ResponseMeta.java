package com.cinehub.platform.be.common.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseMeta {
    private int status;
    private int code;
    private String message;
    private String url;
}