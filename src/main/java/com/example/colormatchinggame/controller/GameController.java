package com.example.colormatchinggame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    // /game 페이지
    @GetMapping("/game")
    public String showGamePage() {
        return "game"; // templates/game.html 렌더링
    }

    // 기본 경로 (/)에 환영 페이지
    @GetMapping("/")
    public String showHomePage() {
        return "index"; // templates/index.html 렌더링
    }
}
