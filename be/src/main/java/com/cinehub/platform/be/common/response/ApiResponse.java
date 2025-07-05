package com.cinehub.platform.be.common.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponse<T> {
    private ResponseMeta response;
    private T data;
}
