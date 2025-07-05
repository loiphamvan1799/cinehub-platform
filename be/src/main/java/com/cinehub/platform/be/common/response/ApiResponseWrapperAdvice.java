package com.cinehub.platform.be.common.response;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
public class ApiResponseWrapperAdvice implements ResponseBodyAdvice<Object> {

    private final HttpServletRequest request;

    public ApiResponseWrapperAdvice(HttpServletRequest request) {
        this.request = request;
    }

    @Override
    public boolean supports(MethodParameter returnType, Class converterType) {
        return !returnType.getParameterType().equals(ApiResponse.class);
    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter returnType,
                                  MediaType selectedContentType,
                                  Class selectedConverterType,
                                  ServerHttpRequest serverRequest,
                                  ServerHttpResponse serverResponse) {

        String path = request.getRequestURI();
        ResponseMeta meta = new ResponseMeta(200, 0, "OK", path);

        Map<String, Object> data = new HashMap<>();
        if (body instanceof List<?>) {
            data.put("total", ((List<?>) body).size());
            data.put("result", body);
        } else {
            data = Map.of("result", body);
        }

        return new ApiResponse<>(meta, data);
    }
}
